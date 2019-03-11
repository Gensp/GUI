// component/col/col.js
Component({
  externalClasses: ['g-class'],

  relations: {
    '../flex/flex': {
      type: 'parent'
    },
    
    '../grid/grid': {
      type: 'parent',
      linked() {
        this.modeChange();
      },
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    span: {
      type: Number,
      value: 12
    },

    //偏移量
    offset: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    gridmode:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //宫格布局mode参数
    modeChange(mode){
      let items = this.getRelationNodes('../grid/grid');
      if (items[0].data.mode){
        this.setData({
          'gridmode': items[0].data.mode
        })
        return;
      }
    }
  }
})
