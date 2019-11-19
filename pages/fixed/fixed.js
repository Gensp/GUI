// pages/fixed/fixed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //页面滚动
  onPageScroll(event) {
    this.setData({
      scrollTop: event.scrollTop
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})