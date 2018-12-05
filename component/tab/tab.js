// component/tab/tab.js
Component({

  externalClasses: ['g-class', 'b-class'],

  relations: {
    '../tabs/tabs': {
      type: 'parent'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

    key: {
      type: String,
      value: ''
    },

    index: {
      type: Number,
      value: ''
    },

    value:{
      type:String,
      value: ''
    },

    //是否选中
    checked: {
      type: Boolean,
      value: false
    },
  },

  data:{
    activeColor:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

    activeChange(active) {
      this.setData({ 'checked': active });
    },

    activeColor(color){
      this.setData({ 'activeColor': color });
    },

    inTap(e){
      const parent = this.getRelationNodes('../tabs/tabs')[0];
      parent.emitEvent({ 'key': this.data.key, 'index': this.data.index });
    },
  }
})
