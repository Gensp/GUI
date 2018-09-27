// component/input/input.js
Component({
  
  behaviors: ['wx://form-field'],

  externalClasses: ['g-class', 'd-class', 'i-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    
    //input标题
    title:{
      type:String,
      value:""
    },

    //可选: text、textarea、number、password
    type:{
      type:String,
      value:'text'
    },

    //默认值
    value:{
      type: String,
      value: ''
    },

    //可选: radius
    mode:{
      type: String,
      value: ''
    },

    //border-bottom
    borderbom:{
      type:Boolean,
      value: false
    },

    //提示文本
    placeholder:{
      type: String,
      value:''
    },

    //自定义提示文本样式
    placeholderstyle:{
      type: String,
      value: ''
    },

    //是否禁用
    disabled:{
      type: Boolean,
      value: false
    },

    //自动聚焦
    focus:{
      type: Boolean,
      value: false
    },

    //最大输入长度，默认-1(不限制)
    maxlength:{
      type: Number,
      value: -1
    },

    //错误文本框
    error:{
      type: Boolean,
      value: false
    },

    //对齐方式：tl居左、tc居中、tr居右
    align:{
      type:String,
      value:''
    },

    //键盘右下角按钮的文字，仅在type='text'时生效
    //可选值参考微信ipnut组件confirm-type属性
    confirmtype:{
      type: String,
      value:'done'
    },

  },

  /**
   * 组件的方法列表
   */
  methods: {
    inFocus(event){
      this.triggerEvent('focus', event); 
    },
    inChange(event){
      const { detail = {} } = event;
      const { value = '' } = detail;
      this.setData({ value });
      this.triggerEvent('change', event);
    },
    inBlue(event){
      this.triggerEvent('blur', event);
    },
    inConfirm(event){
      this.triggerEvent('confirm', event);
    },
  }
})
