// pages/drawer/drawer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drawer:{
      top: false,
      right: false,
      bottom: false,
      left: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  inToggleDrawerTop(e){
    const me = this;
    me.setData({
      'drawer.top': !me.data.drawer.top
    });
  },

  inToggleDrawerRight(e) {
    const me = this;
    me.setData({
      'drawer.right': !me.data.drawer.right
    });
  },

  inToggleDrawerBottom(e){
    const me = this;
    me.setData({
      'drawer.bottom': !me.data.drawer.bottom
    });
  },

  inToggleDrawerLeft(e){
    const me = this;
    me.setData({
      'drawer.left': !me.data.drawer.left
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})