// component/title/title.js
Component({
  
  externalClasses: ['g-class'],

  /**
   * 组件的属性列表
   */
  properties: {

    title:{
      type: String,
      value:''
    },

    //可选：border、empty
    mode:{
      type: String,
      value: 'border'
    }

  },
  
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
