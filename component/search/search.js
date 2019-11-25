// component/search/search.js
Component({
  externalClasses: ['g-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    keyword: {
      type: String,
      value: ''
    },
    maxlen:{
      type: String,
      value: 10
    },
    placeholder: {
      type: String,
      value: '请输入关键词'
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
    inChange(e) {
      this.setData({
        'keyword': e.detail.value
      });
      this.triggerEvent('inchange', { value: e.detail.value });
    },

    inClear(e) {
      this.setData({
        'keyword': ''
      });
      this.triggerEvent('inclear');
    },

    inSubmit(e) {
      const me = this;
      const { maxlen } = me.data;
      if (e.detail.value.length) {
        if (e.detail.value.length <= maxlen) {
          this.setData({
            'keyword': e.detail.value
          });
          me.triggerEvent('insubmit', { 'value': e.detail.value, });
        }
        else {
          wx.showToast({
            title: '关键词不能超过' + maxlen +'个字符',
            icon: 'none'
          })
        }
      }
    }
  }
})
