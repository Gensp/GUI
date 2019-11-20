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
      value: []
    },
  },

  relations: {
    '../indexes-item/indexes-item': {
      type: 'child',
      linked() {
        this.itemDataChange();
      },
      linkChanged() {
        this.itemDataChange();
      },
      unlinked() {
        this.itemDataChange();
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollTop: 0,
    indexesDom: null,
    indexesActive: {
      state: false,
      value: ''
    },
    indexesData: []
  },

  ready(){
    this.inGetIndexesBox('.g-indexes-bar');
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
        //console.log(res)
      })
    },

    //获取字组件列表Data
    itemDataChange(){
      const childItems = this.getRelationNodes('../indexes-item/indexes-item');
      let indexesData = [];
      childItems.forEach(item=>{
        indexesData.push(item.data.name);
        item.updateDataChange();
      })
      this.setData({
        'indexesData': indexesData
      })
    },

    //Touch Move
    inTouchMove(e) {
      if (!this.timeOut){
        //避免频繁setData造成卡顿，控制50ms执行一次
        this.timeOut = setTimeout(()=>{
          const { indexesData, indexesDom } = this.data;
          this.mY = e.touches[0].clientY - indexesDom.top;
          let idx = Math.round(this.mY / (indexesDom.height / indexesData.length)) - 1;
          if (idx > indexesData.length-1) idx = indexesData.length - 1;
          else if (idx < 0) idx = 0;
          this.setData({
            'indexesActive.state': true,
            'indexesActive.value': indexesData[idx]
          })

          //快捷区域内选中，震动一下
          if (this.mY >= 0 && this.mY <= indexesDom.height) {
            wx.vibrateShort();
          }

          this.inSetScrollTop(idx);

          this.timeOut = undefined;
          
          this.triggerEvent('inmove', { index: idx, active: indexesData[idx] });
        },50)
      }
    },

    //设置滚动条
    inSetScrollTop(idx){
      const childItems = this.getRelationNodes('../indexes-item/indexes-item');
      this.setData({
        'scrollTop': childItems[idx].data.top
      })
    },

    //Touch End
    inTouchEnd(e){
      setTimeout(() => {
        this.setData({
          'indexesActive.state': false
        });
      }, 51)
    }

    //
    
  }
})
