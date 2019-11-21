// pages/gui/gui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    github:'https://github.com/Gensp/GUI',
    logData:[
      {
        title: 'v1.0.3(2019-11-21)',
        list: ['- 新增Upload（图片上传）组件']
      },
      {
        title: 'v1.0.2(2019-11-20)',
        list: ['- 新增Grid、Clip、Fixed、Swiper、Drop、Indexes组件']
      },
      {
        title: 'v1.0.1(2018-12-20)',
        list: ['- 新增Gesture、Region组件']
      },
      {
        title:'v1.0.0(2018-09-27)',
        list: ['- 初始版本']
      }
    ]
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