// component/tabs/tabs.js
Component({

  externalClasses: ['g-class'],

  relations: {
    '../tab/tab': {
      type: 'child',
      linked() {
        this.activeChange();
      },
      linkChanged() {
        this.activeChange();
      },
      unlinked() {
        this.activeChange();
      }
    }
  },
  
  /**
   * 组件的属性列表
   */
  properties: {
    
    active:{
      type: String,
      value: '',
      observer: 'activeChange'
    },

    scroll:{
      type:Boolean,
      value:false
    },

    color:{
      type:String,
      value:''
    }

  },

  /**
   * 组件的方法列表
   */
  methods: {
    activeChange(val = this.data.active) {
      let items = this.getRelationNodes('../tab/tab');
      if (items.length > 0) {
        items.forEach(item => {
          item.activeChange(item.data.key === val);
          item.activeColor(this.data.color);
        });
      }
    },

    emitEvent(params) {
      this.triggerEvent('intap', params);
    }
  }
})
