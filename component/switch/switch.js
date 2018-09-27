// component/switch/switch.js
Component({
  externalClasses: ['g-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    value:{
      type:Boolean,
      value: true
    },

    msg:{
      type:String,
      value:''
    },

    disabled:{
      type:Boolean,
      vlaue: false
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
    inToggle(e){
      const me = this;
      const { disabled } = me.data;
      if (disabled ) return;
      me.setData({
        'value': !me.data.value
      });
      me.triggerEvent('inchange', { value: me.data.value } );
    },
  }
})
