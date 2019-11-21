// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uploadImgData:[],
    uploadImgData1:[
      {
        src: 'http://t1.market.mi-img.com/thumbnail/jpeg/w480q70/ThemeMarket/05a4f6566748645330207a8633ad07a6958f3e876',
        imageurl: 'https://www.xxxx/xx/xxx.jpg'
      },
      {
        src: 'http://t1.market.mi-img.com/thumbnail/jpeg/w480q70/ThemeMarket/0543ab46f08a34d092f3b92bbf7c5e100f8a02292',
        imageurl: 'https://www.xxxx/xx/xxx.jpg'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  inDelImg(e){
    this.setData({
      uploadImgData: e.detail.item
    })
    console.log(e.detail)
  },
  inUploadImg(e){
    this.setData({
      uploadImgData: e.detail
    })
    console.log(e.detail)
  },

  inDelImg1(e) {
    this.setData({
      uploadImgData1: e.detail.item
    })
    console.log(e.detail)
  },
  inUploadImg1(e) {
    this.setData({
      uploadImgData1: e.detail
    })
    console.log(e.detail)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})