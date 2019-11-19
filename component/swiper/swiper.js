// component/swiper/swiper.js
let sx, ex;
Component({

  externalClasses: ['g-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    slide: {
      type: [String, Number],
      value: 0
    },
    width: {
      type: [String, Number],
      value: 120
    },
    height: {
      type: [String, Number],
      value: 160
    },
    list: {
      type: Object,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    translateX: 0,
    animate: false,
  },

  ready() {
    this.inCalcTranslateX();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inCalcTranslateX() {
      const { slide, width } = this.data;
      this.setData({
        'translateX': (width * -slide) - (width / 2)
      })
    },

    inTouchStart(e) {
      sx = e.touches[0].clientX;
    },
    inTouchMove(e) {
      const mx = e.touches[0].clientX;
      let { translateX } = this.data;
      translateX += mx - sx;

      sx = e.touches[0].clientX;
      this.setData({
        'translateX': translateX
      });
    },
    inTouchEnd(e) {
      const me = this;
      const { width, translateX, list } = me.data;
      let idx = Math.ceil(translateX / width);
      me.inSetAnimate();
      if (idx > 0) {
        me.inCalcTranslateX();
        idx = 0;
      }
      else {
        let lastitem = list.length - 1;
        if (idx < - lastitem) {
          me.setData({
            'translateX': -(width * lastitem) - (width / 2)
          })
          idx = lastitem;
        }
        else {
          me.setData({
            'translateX': (width * idx) - (width / 2)
          })
        }
      }
      me.setData({
        'slide': Math.abs(idx)
      })
    },

    //设置动画
    inSetAnimate() {
      const me = this;
      if (me.setTime) clearTimeout(me.setTime);
      me.setData({
        'animate': true,
      })
      me.setTime = setTimeout(function () {
        me.inChange();
        me.setData({
          'animate': false
        })
      }, 300)
    },

    //跳转指定slide
    inSetSlide(e) {
      const getData = e.currentTarget.dataset;
      this.setData({
        'slide': getData.index
      });
      this.inSetAnimate();
      this.inCalcTranslateX();
      //this.inChange();
    },

    inChange() {
      const { slide, list } = this.data;
      this.triggerEvent('change', { index: slide, item: list[slide] });
    }
  }
})