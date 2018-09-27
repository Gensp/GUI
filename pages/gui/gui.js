// pages/gui/gui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    github:'https://github.com/Gensp/vue'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  inCopyLink(e){
    const me = this;
    wx.setClipboardData({
      data: me.data.github
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})