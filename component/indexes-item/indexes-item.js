// component/indexes-item/indexes-item.js
Component({

  externalClasses: ['g-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type: String,
      value: ''
    }
  },

  relations: {
    '../indexes/indexes': {
      type: 'parent'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    top: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateDataChange() {
      const query = wx.createSelectorQuery().in(this);
      query.select('.g-indexes-item').boundingClientRect((res) => {
        this.setData({
          top: res.top
        })
      }).exec()
    }
  }
})
