// component/indexes/indexes.js
Component({

  externalClasses: ['g-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    //索引数组
    listData:{
      type: Object,
      value: {}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    indexesDom: null,
    indexesActive: {
      state: false,
      value: ''
    },
    indexesData: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"]
  },

  ready(){
    this.inGetIndexesBox('.indexes-bar');
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取指定节点相关参数
    inGetQuery(obj, call) {
      const query = this.createSelectorQuery();
      query.select(obj).boundingClientRect();
      query.selectViewport().scrollOffset();
      query.exec(function (res) {
        call(res[0]);
      });
    },

    //获取容器节点参数
    inGetIndexesBox(obj) {
      const me = this;
      me.inGetQuery(obj, res => {
        me.setData({
          'indexesDom': res
        })
        console.log(res)
      })
    },

    //Touch Move
    inTouchMove(e) {
      const { indexesData, indexesDom } = this.data;
      this.mY = e.touches[0].clientY - indexesDom.top;
      const idx = Math.round(this.mY / (indexesDom.height / indexesData.length)) - 1;
      this.setData({
        'indexesActive.state': true,
        'indexesActive.value': indexesData[idx]
      })
      this.triggerEvent('inmove', { index: idx, active: indexesData[idx]});

      //快捷区域内选中，震动一下
      if (this.mY >= 0 && this.mY <= indexesDom.height) {
        wx.vibrateShort();
      }
    },

    //Touch End
    inTouchEnd(e){
      this.setData({
        'indexesActive.state': false
      });
    }

    //
    
  }
})
