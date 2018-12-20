//index.js
const app = getApp();

Page({
  data: {
    pagetitle:'GUI 一款基于小程序规范的组件库',
    itemData:[
      {
        title:'字体', 
        list:[
          { val: 'Size 尺寸', path: '/pages/size/size' },
          //{ val: 'Icon 图标', path: '/pages/icon/icon' }
        ]
      },
      {
        title: '布局',
        list: [
          { val: 'Flex 栅格', path: '/pages/flex/flex' },
          { val: 'List 列表', path: '/pages/list/list' },
          //{ val: 'Grid 宫格', path: '/pages/grid/grid' }
        ]
      },
      {
        title: '表单',
        list: [
          { val: 'Button 按钮', path: '/pages/button/button' },
          { val: 'Input 输入框', path: '/pages/input/input' },
          { val: 'Textarea 留言框', path: '/pages/textarea/textarea' },
          { val: 'Radio 单选', path: '/pages/radio/radio' },
          { val: 'Checkbox 复选', path: '/pages/checkbox/checkbox' },
          { val: 'Switch 开关', path: '/pages/switch/switch' }
        ]
      },
      {
        title: '提示反馈',
        list: [
          { val: 'Loading 加载', path: '/pages/loading/loading' },
          { val: 'Modal 对话框', path: '/pages/modal/modal' },
          //{ val: 'Toast 提示', path: '/pages/Toast/Toast' },
          //{ val: 'Swiper 侧滑', path: '/pages/swiper/swiper' }
        ]
      },
      {
        title: '视图',
        list: [
          { val: 'Drawer 抽屉', path: '/pages/drawer/drawer' },
          { val: 'Tab 选项卡', path: '/pages/tab/tab' },
          { val: 'Gesture 手势', path: '/pages/gesture/gesture' },
          //{ val: 'Tag 标签', path: '/pages/tag/tag' },
          //{ val: 'Badge 徽章', path: '/pages/badge/badge' },
          { val: 'Region 省市区', path: '/pages/region/region' },
          { val: 'Line 文本省略 (单行、多行)', path: '/pages/line/line' }
        ]
      }
    ]
  },
  
  inToPage(e){
    const me = this;
    const getData = e.currentTarget.dataset;
    wx.navigateTo({
      url: getData.path
    });
  },

  onShareAppMessage(){
    return {
      title: me.data.pagetitle,
      path: '/pages/index/index'
    }
  },

})
