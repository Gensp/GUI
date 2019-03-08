// pages/clip/clip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clipData:{
      state: true,
      imgurl:'../../images/test2.jpg'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  //图片上传
  inUploadImg(){
    const me = this;
    wx.chooseImage({
      count: 1,
      success(res) {
        me.setData({
          'clipData.state': true,
          'clipData.imgurl': res.tempFilePaths[0]
        })
      }
    })
  },

  //取消裁切
  inToggleClip(e){
    const me = this;
    console.log(e)
    me.setData({
      'clipData.state': !me.data.clipData.state
    })

    //确定
    if (e.type == "insuccess"){
      console.log('确定')
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})