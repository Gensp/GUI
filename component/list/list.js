// component/list/list.js
Component({
  externalClasses: ['g-class'],

  /**
   * 组件的属性列表
   */
  properties: {

    title: {
      type: String,
      value: ''
    },

    //可选tl，tc、tr
    align:{
      type: String,
      value: ''
    },

    //可选: radius
    mode: {
      type: String,
      value: ''
    },

    //头像
    avatar:{
      type: String,
      value: ''
    },

    //图标
    icon:{
      type: String,
      value: ''
    },

    //标题垂直居中
    vertical:{
      type: Boolean,
      value: false
    },

    //右箭头
    link:{
      type: Boolean,
      value: false
    },

    //溢出隐藏
    ellipsis:{
      type: Boolean,
      value: false  
    }

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
