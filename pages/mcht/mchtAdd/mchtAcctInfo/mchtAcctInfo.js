const App = getApp()

Page({
  data: {

    userInfo: {},


    setlType: ['独立清算', '归集清算'],
    setlTypeIndex: 0,
    
    setlCycle: ['T+1', 'D+1'],
    setlCycleIndex: 0,

    setlAcctType: ['是', '否'],
    setlAcctTypeIndex: 0,

    userType: ['对公', '对私'],
    userTypeIndex: 0,

    
    setlCertType: ['身份证'],
    setlCertTypeIndex: 0,

    conTerm: ['一年', '二年', '三年', '长期'],
    conTermIndex: 0,
  },

  /**
   *  合同期限
   *  系统码值：01-一年，02-二年，03-三年，04-长期，
   */
  bindConTermChange: function (e) {
    console.log('合同期限-发生选择改变，携带值为', e.detail.value);
    this.setData({
      conTermIndex: e.detail.value
    });
  },

  /**
   * 合同生效日期
   */
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    });
  },

  /**
    *  账户证件类型
    *  系统码值：01-身份证
    */
  bindSetlCertTypeChange: function (e) {
    console.log('账户证件类型-发生选择改变，携带值为', e.detail.value);
    this.setData({
      setlCertTypeIndex: e.detail.value
    });
  },

  /**
     *  账号类型
     *  系统码值：0-对公，1-对私
     */
  bindUserTypeChange: function (e) {
    console.log('账号类型-发生选择改变，携带值为', e.detail.value);
    this.setData({
      userTypeIndex: e.detail.value
    });
  },

  /**
     *  是否行内账号
     *  系统码值：0-是，1-否
     */
  bindSetlAcctTypeChange: function (e) {
    console.log('是否行内账号-发生选择改变，携带值为', e.detail.value);
    this.setData({
      setlAcctTypeIndex: e.detail.value
    });
  },


  /**
    *  结算周期
    *  系统码值：取自数据字典表
    */
  bindSetlCycleChange: function (e) {
    console.log('结算周期-发生选择改变，携带值为', e.detail.value);
    this.setData({
      setlCycleIndex: e.detail.value
    });
  },


  /**
     *  结算方式
     *  系统码值：01-独立清算， 03-归集清算
     */
  bindSetlTypeChange: function (e) {
    console.log('结算方式-发生选择改变，携带值为', e.detail.value);
    this.setData({
      setlTypeIndex: e.detail.value
    });
  },

  // 结算信息页面 下一步
  mchtAcctNextStep(e) {
    console.log('nextStep');
    const path = '../mchtPicInfo/mchtPicInfo'
    App.WxService.navigateTo(path)
  }

});