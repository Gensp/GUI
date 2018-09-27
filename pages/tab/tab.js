// pages/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active1: 't1',
    active2: 't2',
    active3: 't1',
    active4: 't1',
    tabData:[],
    customData:[
      { key: 't1', value: '菜单1' }, { key: 't2', value: '菜单2' }, { key: 't3', value: '菜单3' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const me = this;

    let { tabData } = me.data;
    for(let x=1; x<9; x++){
      tabData.push({ key: 't'+x, value:'菜单'+x });
    }
    me.setData({
      'tabData': tabData
    });
  },

  inTapTab1(e){
    this.setData({
      'active1': e.detail.key
    });
  },

  inTapTab2(e) {
    this.setData({
      'active2': e.detail.key
    });
  },

  inTapTab3(e) {
    this.setData({
      'active3': e.detail.key
    });
  },

  inTapTab4(e) {
    this.setData({
      'active4': e.detail.key
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})