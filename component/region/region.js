// component/gui/region/region.js
const Area = require('./area.min.js');

Component({
  externalClasses: ['g-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    state:{
      type: Boolean,
      value: false
    },
    //联级，1可选省, 2可选省、市, 3可选省、市，区
    level: {
      type: Number,
      value: 3
    },

    //初始化值，
    value:{
      type: Object,
      value: [] //可以是省市区对应的ID || 名称
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isscroll1: true,
    isscroll2: true,
    isscroll3: true,
    actData:[], //当前活跃索引值
    params: {
      province: {},
      city: {},
      area: {}
    },
    jsonData: Area,
  },

  ready(){
    const me = this;
    const { level, value, actData, jsonData } = me.data;
    if (value == null) return;
    if (value.length){
      //初始化actData
      for (let x in jsonData) {
        if (jsonData[x].id == value[0] || jsonData[x].value == value[0]) {
          actData[0] = x;
          me.setData({
            'actData': actData,
          })
          me.inSetProvince();
          
          if (level > 1) {
            for (let j in jsonData[x].childs) {
              if (jsonData[x].childs[j].id == value[1] || jsonData[x].childs[j].value == value[1]) {
                actData[1] = j;
                me.setData({
                  'actData': actData
                })
                me.inSetCity();
                /*if (level == 2){
                  me.inEnter();
                }*/
                //三级
                if (level > 2){
                  for (let k in jsonData[x].childs[j].childs) {
                    if (jsonData[x].childs[j].childs[k].id == value[2] || jsonData[x].childs[j].childs[k].value == value[2]) {
                      actData[2] = k;
                      me.setData({
                        'actData': actData
                      })
                      me.inSetArea();
                      //me.inEnter();
                      return;
                    }
                  }
                }

              }
            }
          }
        }
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //设置省
    inSetProvince(){
      const me = this;
      const { jsonData, actData } = me.data;
      me.setData({
        'params.province': {
          id: jsonData[actData[0]].id,
          value: jsonData[actData[0]].value
        }
      })
    },

    //设置城市
    inSetCity() {
      const me = this;
      const { jsonData, actData } = me.data;
      me.setData({
        'params.city': {
          id: jsonData[actData[0]].childs[actData[1]].id,
          value: jsonData[actData[0]].childs[actData[1]].value
        }
      })
    },

    //设置区
    inSetArea() {
      const me = this;
      const { jsonData, actData } = me.data;
      me.setData({
        'params.area': {
          id: jsonData[actData[0]].childs[actData[1]].childs[actData[2]].id,
          value: jsonData[actData[0]].childs[actData[1]].childs[actData[2]].value,
        }
      })
    },

    //点选
    inChange(e){
      const me = this;
      const getData = e.currentTarget.dataset;
      let setAct;
      switch (Number(getData.type)){
        //省
        case 1:
          setAct = 'actData[0]';
          me.setData({
            'actData[0]': getData.index,
            'actData[1]': 0,
            'isscroll1': false,
            'isscroll2': true
          });
          me.inSetProvince();
          me.inSetCity();

          if (me.data.level == 3) {
            me.setData({
              'actData[2]': 0,
              'isscroll3': true
            });
            me.inSetArea();
          }
        break;

        //市
        case 2:
          //setAct = 'actData[1]';
          me.setData({
            'actData[1]': getData.index,
            'isscroll2': false,
          });
          if (me.data.level == 3) {
            me.setData({
              'actData[2]': 0,
              'isscroll3': true,
            });
          }
          me.inSetCity();
        break;

        //区
        case 3:
          //setAct = 'actData[2]';
          me.setData({
            'actData[2]': getData.index,
          })
          me.inSetArea();
        break;
      }
    },

    //确定
    inEnter(){
      const me = this;
      me.triggerEvent('enter', me.data.params);
    },

    //取消
    inCancel(){
      this.triggerEvent('cancel', {});
    }
  }
})
