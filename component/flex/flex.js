// component/flex/flex.js
Component({
  externalClasses: ['g-class'],

  relations: {
    '../col/col': {
      type: 'child'
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    //间隔，单位rpx
    space:{
      type: [String, Number],
      value: 0
    }
  }
})
