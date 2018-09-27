// pages/modal/modal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    isloading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  inToggleModal1(e){
    console.log(e);
    this.setData({
      'modal1': !this.data.modal1
    });
  },

  inToggleModal2(e) {
    console.log(e.type);
    this.setData({
      'modal2': !this.data.modal2
    });
  },

  inToggleModal3(e) {
    console.log(e.type);
    this.setData({
      'modal3': !this.data.modal3
    });
  },

  inToggleModal4(e) {
    console.log(e.type);
    this.setData({
      'modal4': !this.data.modal4
    });
  },

  inToggleModal5(e) {
    console.log(e.type);
    this.setData({
      'modal5': !this.data.modal5
    });
  },

  inToggleModal6(e) {
    console.log(e.type);
    this.setData({
      'modal6': !this.data.modal6
    });
  },

  inToggleModal7(e) {
    const me = this;
    console.log(e.type);
    if (e.type === 'insuccess'){
      me.setData({
        'isloading': true
      });
      setTimeout(function(){
        me.setData({
          'isloading': false,
          'modal7': false
        });
        wx.showToast({
          icon: 'none',
          title: '删除成功',
        });
      },2000);
    }
    else{
      me.setData({
        'modal7': !me.data.modal7
      });
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})