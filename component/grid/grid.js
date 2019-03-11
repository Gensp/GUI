// component/grid/grid.js
Component({

  externalClasses: ['g-class'],

  relations: {
    '../col/col': {
      type: 'child',
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    //对齐方式 tl、tc、tr
    align: {
      type: String,
      value: "tc"
    },

    //可选：border
    mode: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
