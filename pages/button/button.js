// component/button/button.js
Component({

  behaviors: ['wx://form-field'],

  externalClasses: ['g-class'],

  /**
   * 组件的属性列表
   */
  properties: {

    //按钮尺寸可选:normal、midd1e、small
    size: {
      type: String,
      value: 'normal'
    },

    //按钮类型可选：default、primary、danger、warning
    type: {
      type: String,
      value: 'default'
    },

    //直角
    isangle: {
      type: Boolean,
      value: true
    },

    //圆角
    radius: {
      type: Boolean,
      value: false
    },

    //是否禁用
    disabled: {
      type: Boolean,
      value: false
    },

    //是否镂空(透明)
    plain: {
      type: Boolean,
      value: false
    },

    //微信开放能力（参造小程序button[open-type]）
    opentype: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //获取用户信息(open-type为getUserInfo时生效)
    inGetUserInfo(event) {
      this.triggerEvent('getuserinfo', event);
    },

    //获取手机号码（open-type为getPhoneNumber时生效）
    inGerPhoneNumber(event) {
      this.triggerEvent('getphonenumber', event);
    },

    //打开授权页
    inOpenSetting(event) {
      this.triggerEvent('opensetting', event);
    },

    //点击
    inTap(event) {
      this.triggerEvent('intap', event);
    },
  }
})
