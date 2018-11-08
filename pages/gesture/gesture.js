// pages/gesture/gesture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gestureLeft:[
      { id: 1, state:false },
      { id: 2, state: false }
    ],
    gestureRight: [
      { id: 1, state: false },
      { id: 2, state: false }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //左滑切换
  inToggleLeft(e) {
    const me = this;
    const { gestureLeft } = me.data;
    //当前节点未滑出，则去遍历重置
    if (!gestureLeft[Number(e.detail.key)].state){
      me.inResetLeft();
    }
    const setState = 'gestureLeft[' + Number(e.detail.key) + '].state';
    me.setData({
      [setState]: true
    });

  },

  //左滑重置
  inResetLeft(e) {
    const me = this;
    const { gestureLeft } = me.data;
    for (let x in gestureLeft) {
      //匹配当前已滑出的节点
      if (gestureLeft[x].state) {
        const setState = 'gestureLeft[' + x + '].state';
        //动画执行完后，设置
        setTimeout(function () {
          me.setData({
            [setState]: false
          });
        }, 200);
        return;
      }
    }
  },

  //右滑切换
  inToggleRight(e) {
    const me = this;
    const { gestureRight } = me.data;
    //当前节点未滑出，则去遍历重置
    if (!gestureRight[Number(e.detail.key)].state) {
      //me.inResetRight();
    }
    const setState = 'gestureRight[' + Number(e.detail.key) + '].state';
    me.setData({
      [setState]: true
    });

  },

  //右滑重置
  inResetRight(e) {
    const me = this;
    const { gestureRight } = me.data;
    for (let x in gestureRight) {
      //匹配当前已滑出的节点
      if (gestureRight[x].state) {
        const setState = 'gestureRight[' + x + '].state';
        //动画执行完后，设置
        setTimeout(function () {
          me.setData({
            [setState]: false
          });
        }, 200);
        return;
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})