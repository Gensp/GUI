// component/col/col.js
Component({
  externalClasses: ['g-class'],

  relations: {
    '../flex/flex': {
      type: 'parent'
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
