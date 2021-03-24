// component/radio/radio.js
Component({
  externalClasses: ['g-class'],
  relations: {
    '../radio-group/radio-group': {
      type: 'parent'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

    //可选：default、list
    mode:{
      type: String,
      value: 'list'
    },

    //索引值
    index: {
      type: Number,
      value: 0
    },

    key:{
      type: [Number, String],
      value: ''
    },

    value:{
      type: String,
      value:''
    },

    //选中的颜色
    color: {
      type: String,
      value: '#1d1b1b'
    },

    //是否选中
    checked:{
      type: Boolean,
      value: false
    },

    //是否禁用
    disabled: {
      type: Boolean,
      value: false
    },

    //可选：left、right
    align:{
      type: String,
      value: 'left', 
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
    activeChange(active) {
      this.setData({ checked: active });
    },

    inChange(e){
      const me = this;
      if (me.data.disabled) return;
      const { key, checked, index } = me.data;
      const item = { key, checked, index };
      const parent = me.getRelationNodes('../radio-group/radio-group')[0];
      parent ? parent.emitEvent(item) : me.triggerEvent('inchange', item);
    }
  }
})
