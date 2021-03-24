// component/radio-group/radio-group.js
Component({
  externalClasses: ['g-class'],
  relations: {
    '../radio/radio': {
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
    active: {
      type: [String, Number],
      value: '',
      observer: 'activeChange'
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

    activeChange(val = this.data.active) {
      let items = this.getRelationNodes('../radio/radio');
      if (items.length > 0) {
        items.forEach(item => {
          item.activeChange(val === item.data.key);
        });
      }
    },

    emitEvent(item) {
      this.triggerEvent('inchange', item);
    }
  }
})
