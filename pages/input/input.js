// pages/input/input.js
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


  inFocus(e) {
    console.log('获取焦点');
  },

  inChange(e){
    console.log('值变了');
  },

  inBlur(){
    console.log('失去焦点');
  },

  inConfirm() {
    console.log('点击确认了');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})