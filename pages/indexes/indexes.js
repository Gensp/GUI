// pages/indexes/indexes.js
const { cities } = require('./city');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cities,
    sourceData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initCities();
  },

  initCities(){
    const { cities } = this.data; 
    let sourceCity = new Array(23);
    const sourceKey = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
    sourceKey.forEach((item, index)=>{
      sourceCity[index]={
        key: item,
        list: []
      }
    });
    cities.forEach((item, index)=>{
      const firstLetter = item.pinyin.substring(0, 1);
      const idx = sourceKey.indexOf(firstLetter)
      sourceCity[idx].list.push({
        name: item.name,
        key: firstLetter,
        zip: item.zip
      })
    })
    this.setData({
      'sourceData': sourceCity
    })
  },

  inMove(e){
    console.log(e.detail)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})