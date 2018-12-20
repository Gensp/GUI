// pages/region.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:{
      province: false,
      city: false,
      area: false
    },
    val:{
      province: null
    },
    actProvince:['福建省'],
    actCity: ['福建省', '泉州市'],
    actArea: [350000, 350200, 350203],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //省市区选择
  inToggle(e){
    const me = this;
    const getData = e.currentTarget.dataset;
    const { state } = me.data;
    let actState, setState;
    switch (getData.type) {
      //省
      case 'province':
        actState = 'state.province';
        setState = state.province;
        break;

      //市
      case 'city':
        actState = 'state.city';
        setState = state.city;
        break;

      //区
      case 'area':
        actState = 'state.area';
        setState = state.area;
        break;
    }
    me.setData({
      [actState]: !setState
    })
    

    //确定
    if (e.type == 'enter'){
      const getData = e.currentTarget.dataset;
      let actVal
      switch (getData.type){
        //省
        case 'province':
          actVal = 'val.province';
        break;

        //市
        case 'city':
          actVal = 'val.city';
        break;

        //区
        case 'area':
          actVal = 'val.area';
        break;
      }
      me.setData({
        [actVal]: e.detail
      })
      console.log(e.detail)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})