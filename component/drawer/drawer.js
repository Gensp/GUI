// component/drawer/drawer.js
Component({
  externalClasses: ['g-class', 'g-class-mask'],
  /**
   * 组件的属性列表
   */
  properties: {

    show:{
      type: Boolean,
      value:'false'
    },

    //可选：top、right、bottom、left
    position:{
      type:String,
      value:'left'
    },
    //position为left、right时生效
    width:{
      type: String,
      value: ''
    },
    //position为top、bottom时生效
    height: {
      type: String,
      value: ''
    },
    //显隐动画
    animate: {
      type: Boolean,
      value: true
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
    //点击遮罩
    inTapMask(e){
      this.triggerEvent('inmask');
    },
  }
})
