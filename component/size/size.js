// component/size/size.js
Component({
  externalClasses: ['g-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    //字体大小可选：h1、h2、h3、h4、h5、h6
    size:{
      type:String,
      value: ''
    },

    //颜色
    color:{
      type: String,
      value: ''
    },

    //加粗
    strong:{
      type:Boolean,
      value:false
    },

    //对齐可选：tl、tc、tr
    align:{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
