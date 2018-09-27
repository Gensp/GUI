// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radiusActive: '芒果',
    radioData:[
      { id: 1, value: '白菜', mode:'list' },
      { id: 2, value: '茄子', mode: 'list' },
      { id: 3, value: '土豆', mode: 'list', align: 'right' },
      { id: 3, value: '花菜', mode: 'list', align:'right' }
    ],
    radioActive: '茄子',

    disabled:{
      active: '',
      state: true,
      checked:false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  inChange1(e){
    this.setData({
      'radioActive': e.detail.value
    });
  },

  inChange2(e) {
    this.setData({
      'radiusActive': e.detail.value
    });
  },

  inDisabledChange(e){
    this.setData({
      'disabled.checked': e.detail.active
    })
  },

  inTap(e){
    this.setData({
      'disabled.state': !this.data.disabled.state
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})