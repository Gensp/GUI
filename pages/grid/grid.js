// pages/grid/grid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridData1:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const me = this;
    me.inGetGrid();
  },

  inGetGrid(){
    const me = this;
    const gridArr = [];
    for(let x = 0; x < 6; x++){
      gridArr.push({value:'宫格'+x})
    }
    me.setData({
      'gridData1': gridArr
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})