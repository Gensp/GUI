// component/drop/drop.js
Component({
  externalClasses: ['g-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    imgurl:{
      type: String,
      value: ''
    },

    key:{
      type: String,
      value: ''
    },

    //容器宽度
    boxW:{
      type: Number,
      value: ''
    },

    //容器高度
    boxH: {
      type: Number,
      value: ''
    },

    //选中状态
    active:{
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    data:{}
  },

  ready(){
    this.initImg();
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //初始化图片
    initImg(){
      const me = this;
      let { imgurl, boxW, boxH } = me.data;

      //获取图片信息
      wx.getImageInfo({
        src: imgurl,
        success(res) {
          let data = {
            active: me.data.active,
            key: me.data.key,
            imgurl: imgurl,
            width: res.width,
            height: res.height,
            //定位居中
            left: boxW / 2 - res.width / 2,
            top: boxH / 2 - res.height / 2,
            scale: 1, //缩放
            oScale: 1, //缩放方向
            rotate: 1, //角度
          }

          //中心点
          data.cx = data.left + data.width / 2,
          data.cy = data.top + data.height / 2;

          me.setData({
            'data': data
          })
          console.log(data)
          me.triggerEvent('init', data);
        }
      })

    },

    //图片开始移动
    imgTouchStart(e) { 
      const me = this;
      let { data, active } = me.data;

      data.lx = e.touches[0].clientX;
      data.ly = e.touches[0].clientY;

      me.setData({
        'data': data
      })
      me.triggerEvent('imgStart', data);
    },
    //图片移动中
    imgTouchMove(e) { 
      const me = this;
      let { data, active } = me.data;

      data._lx = e.touches[0].clientX;
      data._ly = e.touches[0].clientY;

      data.left += data._lx - data.lx;
      data.top += data._ly - data.ly;
      data.cx += data._lx - data.lx;
      data.cy += data._ly - data.ly;

      data.lx = e.touches[0].clientX;
      data.ly = e.touches[0].clientY;

      me.setData({
        'data': data
      })
      me.triggerEvent('imgMove', data);
    },
    //图片移动结束
    imgTouchEnd(e) { 
      const me = this;
      let { data, active } = me.data;

      me.triggerEvent('imgEnd', data);
    },

    //缩放、旋转开始
    inTouchStart(e) {
      const me = this;
      console.log(e)
      let { data, active } = me.data;

      //获取作为移动前角度的坐标
      data.tx = e.touches[0].clientX;
      data.ty = e.touches[0].clientY;
      //移动前的角度
      data.angleBefore = me.inCalcAngle(data.cx, data.cy, data.tx, data.ty);
      //获取图片半径
      data.radius = me.inGetRadius(data.cx, data.cy, data.left, data.top);
     
    },
    //缩放、旋转中
    inTouchMove(e) {
      const me = this;
      let { data, active } = me.data;

      //记录移动后的位置
      data._tx = e.touches[0].clientX;
      data._ty = e.touches[0].clientY;
      //移动的点到圆心的距离
      data.moveDistance = me.inGetRadius(data.cx, data.cy, data._tx, data._ty - 10);

      data.scale = data.moveDistance / data.radius;
      data.oScale = 1 / data.scale;


      //移动后位置的角度
      data.angleAfter = me.inCalcAngle(data.cx, data.cy, data._tx, data._ty);
      //角度差
      data.angleDiffer = data.angleAfter - data.angleBefore;

      //叠加的角度差
      data.rotate += data.angleDiffer;
      data.angle = data.rotate; //赋值

      //用过移动后的坐标赋值为移动前坐标
      data.tx = e.touches[0].clientX;
      data.ty = e.touches[0].clientY;
      data.angleBefore = me.inCalcAngle(data.cx, data.cy, data.tx, data.ty);

      this.setData({
        'data': data
      })
    },
    //缩放、旋转结束
    inTouchEnd(e) {
      console.log(e)
    },

    //删除
    inDelDrop(e){
      this.triggerEvent('indel', this.data.data);
    },

    //获取半径
    inGetRadius(cx, cy, pointer_x, pointer_y) {
      var ox = pointer_x - cx;
      var oy = pointer_y - cy;
      return Math.sqrt(
        ox * ox + oy * oy
      );
    },

    /*
     *参数1和2为图片圆心坐标
     *参数3和4为手点击的坐标
     *返回值为手点击的坐标到圆心的角度
     */
    inCalcAngle (cx, cy, pointer_x, pointer_y) {
      var ox = pointer_x - cx;
      var oy = pointer_y - cy;
      var to = Math.abs(ox / oy);
      var angle = Math.atan(to) / (2 * Math.PI) * 360;
      // console.log("ox.oy:", ox, oy)
      if (ox < 0 && oy < 0)//相对在左上角，第四象限，js中坐标系是从左上角开始的，这里的象限是正常坐标系  
      {
        angle = -angle;
      } else if (ox <= 0 && oy >= 0)//左下角,3象限  
      {
        angle = -(180 - angle)
      } else if (ox > 0 && oy < 0)//右上角，1象限  
      {
        angle = angle;
      } else if (ox > 0 && oy > 0)//右下角，2象限  
      {
        angle = 180 - angle;
      }
      return angle;
    },
  }
})
