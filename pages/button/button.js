// component/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //获取用户信息(open-type为getUserInfo时生效)
  inGetUserInfo(event) {
    this.triggerEvent('getuserinfo', event);
  },

  //获取手机号码（open-type为getPhoneNumber时生效）
  inGerPhoneNumber(event) {
    this.triggerEvent('getphonenumber', event);
  },

  //打开授权页
  inOpenSetting(event) {
    this.triggerEvent('opensetting', event);
  },

  //点击
  inTap(event) {
    this.triggerEvent('intap', event);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

