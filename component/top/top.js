// component/top/top.js
Component({

  externalClasses: ['g-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    //返回上一页
    isback: {
      type: Boolean,
      value: true
    },
    
    //title内容
    title: {
      type: String,
      value: ''
    },
    //title对齐方式 center || left
    align:{
      type: String,
      value: 'center'
    },
    //title背景颜色
    background:{
      type: String,
      value:'#2ca9e1'
    },
    //title文字颜色
    color: {
      type: String,
      value: 'white'
    },

    //返回上一页，默认页面
    defaultPage:{
      type: String,
      value: '/pages/index/index'
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    system: wx.getSystemInfoSync()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inGoBack() {
      //返回上一页
      if (getCurrentPages().length > 1) {
        wx.navigateBack({
          delta: 1
        });
      }
      //默认页面
      else {
        wx.reLaunch({
          url: this.data.defaultPage
        });
      }
      this.triggerEvent('inback');
    },
  }
})
