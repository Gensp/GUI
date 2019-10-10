// component/clip/clip.js
let stepY, stepX;
Component({
  externalClasses: ['g-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    //需裁切图片路径
    imgurl:{
      type: String,
      value: 'ktest.jpg'
    },

    cancelTxt:{
      type: String,
      value:'取消'
    },

    scuuessTxt: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIPX: wx.getSystemInfoSync().model.indexOf('iPhone X') == -1 ? '' : 'isIPX',
    sys: wx.getSystemInfoSync(),
    stv: {
      offsetX: 0,
      offsetY: 0,
      zoom: false, //缩放状态
      scale: 1,  //初始化缩放倍数
      distance: 0  //两只手指之间的距离
    },
    clipBoxData:{}, //裁切盒子相关属性
    canvasData:{
      imgw: '',
      imgh: '',
      scale: 1, //根据图片长、宽计算可缩放最小比例
      multiple:1,//根据裁切区域长、宽计算可放大最大比例
    },
    animateClass:''
  },

  ready(){
    const me = this;
    me.inGetQuery('#g-clip-box', (res)=>{
      me.setData({
        'clipBoxData': res
      })
      me.inCalcImgWH();
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //获取指定节点相关属性
    inGetQuery(id, call) {
      const query = this.createSelectorQuery();
      query.select(id).boundingClientRect();
      query.selectViewport().scrollOffset();
      query.exec(function (res) {
        call(res[0]);
      });
    },

    //根据容器高度 计算图片缩放最小比例
    inCalcImgWH() {
      const me = this;
      let { imgurl, clipBoxData } = me.data;
      wx.getImageInfo({
        src: imgurl,
        success(res) {
          let dHeight = clipBoxData.height, dWidth = clipBoxData.width, dScale;
          if (res.width > res.height) {
            dScale = dHeight / (dWidth / res.width * res.height);
            me.setData({
              'canvasData.isWH':true,
              'canvasData.multiple': res.height / clipBoxData.height
            })
          }
          else {
            dScale = dWidth / (dHeight / res.height * res.width);
            me.setData({
              'canvasData.isWH': false,
              'canvasData.multiple': res.width / clipBoxData.width
            })
          }

          
          me.setData({
            'canvasData.imgw': res.width,
            'canvasData.imgh': res.height,
            'canvasData.scale':dScale,
            'stv.scale': 3//dScale//me.data.canvasData.multiple
          });

          let { canvasData, stv } = me.data;
          me.setData({
            //根据宽、高(数值大的一方)计算当前图片缩放后的宽、高
            'canvasData.imgwh': canvasData.isWH ? canvasData.imgw : canvasData.imgh
          });

          me.inCalcMaxXY();
        }
      })
    },

    //计算图片XY轴可移动距离
    inCalcMaxXY() {
      const me = this;
      let { stv, canvasData, clipBoxData } = me.data;
      if (canvasData.imgw > canvasData.imgh) {
        //根据高（宽>高）计算图片等比缩放比例
        const thanScale = canvasData.imgw / clipBoxData.width,

          //等比缩放后的图片宽度
          thanHeight = canvasData.imgh / thanScale,

          //裁切区域内（较短边）未铺满裁切区域剩余部分 = (盒子宽度 - 等比缩放后宽度) * (当前缩放比例 - 最小缩放比例) / 2
          thanY = (clipBoxData.height - thanHeight) * (stv.scale - canvasData.scale) / 2;

        stepY = (canvasData.scale * clipBoxData.width - stv.scale * clipBoxData.width) / 2 + thanY;
        stepX = -(stv.scale * clipBoxData.width - clipBoxData.width) / 2;
      }
      else {
        //根据高（高>宽）计算图片等比缩放比例
        const thanScale = canvasData.imgh / clipBoxData.height, 

          //等比缩放后的图片宽度
          thanWidth = canvasData.imgw / thanScale,

          //裁切区域内（较短边）未铺满裁切区域剩余部分 = (盒子宽度 - 等比缩放后宽度) * (当前缩放比例 - 最小缩放比例) / 2
          thanX = (clipBoxData.width - thanWidth) * (stv.scale - canvasData.scale) / 2;

        stepY = -(stv.scale * clipBoxData.height - clipBoxData.height) / 2;
        stepX = (canvasData.scale * clipBoxData.width - stv.scale * clipBoxData.width) / 2 + thanX;
      }
    },

    //触摸开始
    inTouchStart(e) {
      const me = this;
      if (e.touches.length === 1) {
        let { clientX, clientY } = e.touches[0];
        me.startX = clientX;
        me.startY = clientY;
        me.touchStartEvent = e.touches;
      }
      else {
        let xMove = e.touches[1].clientX - e.touches[0].clientX;
        let yMove = e.touches[1].clientY - e.touches[0].clientY;
        let distance = Math.sqrt(xMove * xMove + yMove * yMove);
        me.setData({
          'stv.distance': distance,
          'stv.zoom': true //缩放状态
        })
      }
    },

    //触摸移动
    inTouchMove(e) {
      const me = this;
      let { stv } = me.data;
      //单指移动
      if (e.touches.length == 1) {
        if (stv.zoom) {
          //缩放状态，不处理单指
          return;
        }
        let { clientX, clientY } = e.touches[0];
        let offsetX = clientX - me.startX;
        let offsetY = clientY - me.startY;
        me.startX = clientX;
        me.startY = clientY;

        stv.offsetX += offsetX;
        stv.offsetY += offsetY;

        me.setData({
          stv: stv
        });
      }
      //双指缩放
      else {
        let xMove = e.touches[1].clientX - e.touches[0].clientX;
        let yMove = e.touches[1].clientY - e.touches[0].clientY;

        let distance = Math.sqrt(xMove * xMove + yMove * yMove);

        let distanceDiff = distance - stv.distance;
        let newScale = stv.scale + 0.005 * distanceDiff;

        me.setData({
          'stv.distance': distance,
          'stv.scale': newScale < 0.8 ? 0.8 : newScale
        });
      }
    },

    //触摸结束
    inTouchEnd(e) {
      const me = this;
      if (e.touches.length === 0) {
        me.setData({
          'stv.zoom': false, //重置缩放状态
        });
        me.inSetAnimate();

        //最小缩放比例
        if (me.data.stv.scale < me.data.canvasData.scale) {
          me.setData({
            'stv.scale': me.data.canvasData.scale
          });
        }
        //最大放大比例
        else if (me.data.stv.scale > me.data.canvasData.multiple){
          me.setData({
            'stv.scale': me.data.canvasData.multiple
          });
        }
        me.inCalcMaxXY();

        //Y轴最大移动距离
        let { stv, canvasData } = me.data;

        //向下拖动
        if (stv.offsetY > 0) {
          if (stv.offsetY > Math.abs(stepY)) {
            me.setData({
              'stv.offsetY': Math.abs(stepY)
            });
          }
        }
        //向上拖动
        else {
          if (Math.abs(stv.offsetY) > Math.abs(stepY)) {
            me.setData({
              'stv.offsetY': stepY
            });
          }
        }

        //X轴最大移动距离
        //向右拖动
        if (stv.offsetX > 0) {
          if (stv.offsetX > Math.abs(stepX)) {
            me.setData({
              'stv.offsetX': Math.abs(stepX)
            });
          }
        }
        //向左拖动
        else {
          if (Math.abs(stv.offsetX) > Math.abs(stepX)) {
            me.setData({
              'stv.offsetX': stepX
            });
          }
        }
      }
    },

    //设置执行动画
    inSetAnimate() {
      const me = this;
      me.setData({
        'animateClass': 'animate-img'
      });
      setTimeout(function () {
        me.setData({
          'animateClass': ''
        });
      }, 200);
    },

    //取消
    inCancel(e){
      this.triggerEvent('incancel', e);
    },

    //确定
    inSuccess(e) {
      const me = this;
      wx.showLoading({
        title: '裁切中...',
        mask: true
      });
      const { stv, clipBoxData, canvasData, imgurl } = me.data;
      const canvasid = 'g-clip-canvas', ctx = wx.createCanvasContext(canvasid, me);
    
        //图片在canvas画布内X、Y轴初始偏移值
      const xx = canvasData.isWH ? 0 : Math.abs((canvasData.imgw - canvasData.imgh) / 2) ,
        yy = canvasData.isWH ? Math.abs((canvasData.imgh - canvasData.imgw) / 2) : 0;

      ctx.drawImage(imgurl, 0, 0, 
        canvasData.imgw, canvasData.imgh,
        xx, yy, canvasData.imgw, canvasData.imgh);

      ctx.draw(false, () => {
        //image图片最大长、宽
        const cw = clipBoxData.width * canvasData.multiple, ch = clipBoxData.height * canvasData.multiple;
        
        const dw = clipBoxData.width * stv.scale, dh = clipBoxData.height * stv.scale;
        
        wx.canvasToTempFilePath({
          fileType: 'jpg',
          x: (canvasData.imgwh - dw) / 2, /*stv.offsetX * (stv.scale - canvasData.scale),*/
          y: (canvasData.imgwh - dh) / 2,/*stv.offsetY * (stv.scale - canvasData.scale),*/
          width: dw,
          height: dh,
          destWidth: cw,
          destHeight: ch,
          canvasId: canvasid,
          success(res) {
            wx.previewImage({
              current: res.tempFilePath,
              urls: [res.tempFilePath]
            });
            /*wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
            })*/
            //me.triggerEvent('insuccess', { clipimg: res.tempFilePath });
          },
          complete(res){
            wx.hideLoading();
          }
        }, me);
      })
    }
  }
})
