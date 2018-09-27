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

    value:{
      type: String,
      value:''
    },

    //选中的颜色
    color: {
      type: String,
      value: '#2ca9e1'
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
      const item = { active: !me.data.checked, value: me.data.value };
      const parent = me.getRelationNodes('../radio-group/radio-group')[0];
      parent ? parent.emitEvent(item) : me.triggerEvent('inchange', item);
    }
  }
})
