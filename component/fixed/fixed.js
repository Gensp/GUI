// component/fixed/fixed.js
Component({
  externalClasses: ['g-class'],

  observers:{
    'scrollTop'(val){
      this.inSetFixedClass();
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    scrollTop:{
      type: [String, Number],
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    fixedData:null,
    toggleClass:''
  },

  ready(){
    this.inGetFixedBox('#fixed-bar');
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //获取指定节点相关参数
    inGetQuery(obj, call){
      const query = this.createSelectorQuery();
      query.select(obj).boundingClientRect();
      query.selectViewport().scrollOffset();
      query.exec(function (res) {
        call(res[0]);
      });
    },

    //获取吸顶容器节点参数
    inGetFixedBox(obj){
      const me = this;
      me.inGetQuery(obj, res=>{
        console.log(res)
        me.setData({
          'fixedData':res
        })
      })
    },

    //设置吸顶容器class
    inSetFixedClass(){
      const { scrollTop, fixedData } = this.data;
      if (!fixedData) return;
      if (!this.timeOut){
        //避免频繁setData造成卡顿，控制50ms执行一次
        this.timeOut = setTimeout(()=>{
          if (scrollTop >= fixedData.top){
            this.setData({
              'toggleClass': 'fixed'
            })
          }
          else{
            this.setData({
              'toggleClass': ''
            })
          }
          this.timeOut = undefined;
        },50)
      }
    },
  }
})
