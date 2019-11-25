// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:''
  },

  onLoad: function (options) {

  },

  inChange(e){
    console.log(e)
  },

  inSubmit(e){
    console.log(e)
    this.setData({
      'keyword': e.detail.value
    })
  },

  inClear(e) {
    console.log('clear')
    this.setData({
      'keyword': ''
    })
  },


  onShareAppMessage: function () {

  }
})