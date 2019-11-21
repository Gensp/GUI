// component/upload/upload.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Object,
      value: []
    },
    //是否显示删除操作
    isdel: {
      type: Boolean,
      value: true
    },
    //多图
    multi: {
      type: Boolean,
      value: true
    },
    //最大上传数
    maxImg: {
      type: [String, Number],
      value: 9,
    },
    //图片上传大小(单位：KB)
    maxSize: {
      type: [String, Number],
      value: 2048,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //上传图片
    inUploadImg() {
      const me = this;
      const { list, multi, maxSize, maxImg } = me.data;
      if (list.length >= maxImg) {
        wx.showToast({
          title: '最多只能上传' + maxImg + '张',
          icon: 'none'
        });
      }
      else {
        wx.chooseImage({
          count: multi ? (maxImg - list.length) : 1,
          sizeType: ['original', 'compressed'],
          success(res) {

            res.tempFiles.forEach((item, index) => {
              const dateId = new Date().getTime();
              const M = item.size / 1024;
              if (M > maxSize) {
                wx.showToast({
                  title: '单张图片最大不能超过' + (maxSize / 1024).toFixed(2) + 'M',
                  icon: 'none'
                });
                return
              }
              else {
                list.push({ upload: true, id: dateId, src: item.path });
                me.setData({
                  'list': list
                });

                //上传图片至服务端逻辑
                //xxx

                //此处用setTimeout模拟
                setTimeout(()=>{

                  //服务端返回地址
                  const ImgServerUrl = 'https://www.xxxx/xx/xxx.jpg';

                  //匹配id，设置上传状态
                  list.forEach(item => {
                    if (dateId == item.id) {
                      item.imageurl = ImgServerUrl;
                      item.upload = false;
                    }
                  });
                  me.setData({
                    'list': list
                  });
                  me.triggerEvent('inupload', list);
                },1500);
              }
            })
          }
        })
      }
    },

    //删除图片
    inDelImg(e) {
      const me = this;
      const getData = e.currentTarget.dataset;
      let { list } = me.data;
      const delItem = list[getData.index];
      list.splice(getData.index, 1);
      me.setData({
        'list': list
      })
      me.triggerEvent('indel', { delidx: getData.index, del: list[getData.index], item: list });
    },

    //查看大图
    inSeeImg(e) {
      const me = this;
      const getData = e.currentTarget.dataset;
      let { list } = me.data;
      let newList = [];
      list.forEach(item => {
        newList.push(item.src);
      });
      wx.previewImage({
        current: list[getData.index].src,
        urls: newList
      });
    },
  }
})