// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //授权用户信息
  inGetUserInfo(e){
    console.log(e)
  },

  //获取手机号码
  inGetPhoneNumber(e){
    console.log(e)
    wx.showModal({
      showCancel:false,
      'content': e.detail.detail.errMsg
    });
  },

  //打开授权页
  inOpenSetting(e){
    console.log(e)
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    console.log(e)
  }
})