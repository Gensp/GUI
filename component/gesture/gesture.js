// component/gesture/gesture.js
let touchStart, touchEnd;
Component({
  externalClasses: ['g-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //关键字
    key:{
      type: String,
      value: ''
    },
    //滑动方向可选：left || right
    direction:{
      type: String,
      value: 'left'
    },
    //状态
    state:{
      type: Boolean,
      value: false
    },
    //移动步长(单位rpx)
    stepx:{
      type: Number,
      value: 200
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

    //滑动开始
    inTouchStart(e) {
      const me = this;
      if (e.changedTouches.length > 0) {
        touchStart = e.changedTouches[0].pageX;
      }
    },

    //滑动结束
    inTouchEnd(e) {
      const me = this;
      const getData = e.currentTarget.dataset;
      touchEnd = e.changedTouches[0].pageX;
      const { key, direction } = me.data;

      const parms = { state: me.data.state, key: key };

      //重置
      function InReset(){
        me.setData({
          'state': false
        })
        me.triggerEvent('inreset', parms);
      }

      //左滑
      if (direction == 'left') {
        if (touchStart - touchEnd > 30) {
          me.triggerEvent('inleft', parms);
        }
        else {
          InReset();
        }
      }
      //右滑
      else if (direction == 'right'){
        if ( touchEnd - touchStart > 30) {
          me.triggerEvent('inright', parms);
        }
        else{
          InReset();
        }
      }
    },

  }
})
