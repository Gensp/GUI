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
      type: Object,
      value: [],
      observer: 'activeChange'
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    activeChange(val = this.data.active) {
      if(!val) return;
      let items = this.getRelationNodes('../checkbox/checkbox');
      if (items.length > 0) {
        items.forEach(item => {
          const key_idx = val.indexOf(item.data.key);
          item.activeChange(key_idx !== -1);
        });
      }
    },

    emitEvent(item) {
      this.triggerEvent('inchange', item);
    }
  }
})
