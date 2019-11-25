// component/page/page.js
Component({
  externalClasses: ['g-class', 'top-class', 'bom-class'],

  options: {
    multipleSlots: true //多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    //适配iphoneX(只针对con、bom节点生效，TabBar界面无需适配con、bom节点)
    autoX: {
      type: Boolean,
      value: true
    },

    top: {
      type: Boolean,
      value: false
    },
    bom: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIPX: wx.getSystemInfoSync().model.indexOf('iPhone X') == -1 ? '' : 'isIPX',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
