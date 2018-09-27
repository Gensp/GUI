// component/checkbox-group/checkbox-group.js
Component({
  externalClasses: ['g-class'],
  relations: {
    '../checkbox/checkbox': {
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
      type: String,
      value: '',
      observer: 'activeChange'
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    activeChange(val = this.data.active) {
      let items = this.getRelationNodes('../checkbox/checkbox');
      if (items.length > 0) {
        items.forEach(item => {
          item.activeChange(val.indexOf(item.data.value) !== -1);
        });
      }
    },

    emitEvent(active) {
      this.triggerEvent('inchange', active);
    }
  }
})
