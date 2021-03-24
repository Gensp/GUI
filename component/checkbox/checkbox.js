// component/checkbox/checkbox.js
Component({
  externalClasses: ['g-class'],
  relations: {
    '../checkbox-group/checkbox-group': {
      type: 'parent'
    }
  },
  /**
   * z
   * 组件的属性列表
   */
  properties: {
    //可选：default、list
    mode: {
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

    value: {
      type: String,
      value: ''
    },

    //选中的颜色
    color: {
      type: String,
      value: '#2ca9e1'
    },

    //是否选中
    checked: {
      type: Boolean,
      value: false
    },

    //是否禁用
    disabled: {
      type: Boolean,
      value: false
    },

    //可选：left、right
    align: {
      type: String,
      value: 'left',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    activeChange(active) {
      this.setData({ checked: active });
    },

    inChange(e) {
      const me = this;
      if (me.data.disabled) return;
      const { key } = me.data;
      const parent = me.getRelationNodes('../checkbox-group/checkbox-group')[0];
      let { active } = parent.data;
      const key_idx = active.indexOf(key);
      if(key_idx == -1){
        active.push(key);
      }
      else{
        active.splice(key_idx,1);
      }
      parent ? parent.emitEvent({active}) : me.triggerEvent('inchange', {active});
    }
  }
})
