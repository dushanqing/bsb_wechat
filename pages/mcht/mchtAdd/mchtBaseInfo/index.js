const App = getApp()

Page({
  data: {

    userInfo: {},
    // items: [
    //   {
    //     icon: '',
    //     text: '所属商户',
    //     path: '../detail/mchtMngNo/mchtMngNo'
    //   },
    // ],



    showTopTips: false,

    mchtLevs: ["连锁商户", "普通商户"],
    mchtLevIndex: 0,

    stores: ["是", "否"],
    storeIndex: 0,

    mchtMngNo: ["商户01", "商户02", "商户03", "商户04"],
    mchtMngNoIndex: 0,

    mchtMngScope: ["零售", "信用卡", "学校", "医院"],
    mchtMngScopeIndex: 0,

    mchtType: ["实体", "虚体"],
    mchtTypeIndex: 0,
    isAgree: false
  },

  
  /**
   *  经营类型
   *  系统码值：01-实体， 02-虚体
   */
  bindMchtTypeChange: function (e) {
    console.log('经营类型-发生选择改变，携带值为', e.detail.value);
    this.setData({
      storeIndex: e.detail.value
    });
  },


 /**
   *  行业类别
   */
  bindMchtMngScopeChange: function(e) {
    console.log('行业类别-发生选择改变，携带值为', e.detail.value);
    this.setData({
      mchtMngScopeIndex: e.detail.value
    });
  },
  /**
   *  所属商户
   */
  bindMchtMngNoChange: function (e) {
    console.log('所属商户-发生选择改变，携带值为', e.detail.value);
    this.setData({
      mchtMngNoIndex: e.detail.value
    });
  },

  /**
   *  是否门店 
   *  系统码值：01-是， 02-否
   */
  bindStoreChange: function (e) {
    console.log('picker Store 是否门店-发生选择改变，携带值为', e.detail.value);

    this.setData({
      storeIndex: e.detail.value
    });
  },

/**
   *  商户类型 
   *  系统码值：01-连锁商户， 02-普通商户
   */
  bindMchtLevChange: function(e) {
    console.log('picker mchtLev 商户类型-发生选择改变，携带值为', e.detail.value);
    this.setData({
      mchtLevIndex: e.detail.value
    })
  },

  
  // 基本信息页面 下一步
  mchtInfoNextStep(e) {
    console.log("nextStep");
    // const index = e.currentTarget.dataset.index
    const path = "../mchtAcctInfo/mchtAcctInfo"
    App.WxService.navigateTo(path)
  }

});