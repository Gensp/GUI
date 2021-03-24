// pages/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxActive: ['白菜','茄子'],
    checkboxData: [
      { id: 1, value: '白菜', mode: 'list' },
      { id: 2, value: '茄子', mode: 'list' },
      { id: 3, value: '土豆', mode: 'list', align: 'right' },
      { id: 3, value: '花菜', mode: 'list', align: 'right' }
    ],
    radioActive: ['芒果'],

    disabled: {
      active: '',
      state: true,
      checked: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  inRetrieval(arr, value){
    let newarr = arr;
    const index = newarr.indexOf(value);
    index === -1 ? newarr.push(value) : newarr.splice(index, 1);
    return newarr;
  },

  inChange1({ detail = {} }){
    const me = this;
    const { checkboxActive } = me.data;
    console.log(detail)
    me.setData({
      'checkboxActive': me.inRetrieval(checkboxActive, detail.value)
    });
  },

  inChange2({ detail = {} }) {
    const me = this;
    const { radioActive } = me.data;
    me.setData({
      'radioActive': me.inRetrieval(radioActive, detail.value)
    });
  },

  inDisabledChange(e) {
    this.setData({
      'disabled.checked': e.detail.active
    })
  },

  inTap(e) {
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