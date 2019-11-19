// pages/drop/drop.js
const $Array = require('./array.js');
let IncreaseID = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgData:[],
    boxJson:{},
  },

  onLoad(options) {
    const me = this;
    
    me.inGetQuery('.drop-main', res=>{
      me.setData({
        'boxJson':res
      })
      //console.log(me.data.boxJson)
      me.inSetImgData();
    })
  },

  //获取指定节点相关参数
  inGetQuery(id, call) {
    const query = wx.createSelectorQuery();
    query.select(id).boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(function (res) {
      call(res[0]);
    });
  },

  //插入挂件
  inSetImgData(){
    const me = this;
    me.inClear();

    let { imgData } = me.data;
    imgData.push({ url: '../../images/gui.png', key: ++IncreaseID, active: true });
    me.setData({
      'imgData': imgData
    })
  },

  //初始化
  initDrop(e){
    const me = this;
    const { imgData } = me.data;

    //匹配key获取索引值
    const idx = $Array.index(imgData, e.detail.key, 'key');

    me.setData({
      ['imgData[' + idx + ']']: e.detail
    })
    //console.log(me.data.imgData)
  },

  //移动时
  inMoveChange(e){
    console.log(e.detail)
  },
 
  //缩放时
  inScaleChange(e){
    console.log(e.detail)
  },

  //清楚编辑状态
  inClear(){
    const me = this;
    let { imgData } = me.data;
    imgData.forEach(item => {
      item.active = false;
    })
    me.setData({
      'imgData': imgData
    })
  },

  //编辑状态切换
  inToggle(e){
    const me = this;
    me.inClear();

    const { imgData } = me.data;
    const getData = e.currentTarget.dataset;
    me.setData({
      ['imgData[' + getData.index + '].active']: !imgData[getData.index].active
    })
  },

  //删除指定挂件
  inDelDrop(e){
    const me = this;
    let { imgData } = me.data;

    //匹配key获取索引值
    let idx = $Array.index(imgData, e.detail.key, 'key');

    //console.log('key:'+e.detail.key, 'index:'+idx);
    imgData.splice(idx, 1);
    //debugger;

    me.setData({
      'imgData': imgData
    })
    if (idx > 0) {
      me.setData({
        ['imgData[' + (--idx) + '].active']: true
      })
    }
  }
})