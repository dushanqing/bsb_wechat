const App = getApp()

Page({
  data: {

    userInfo: {},
    items: [
      {
        icon: '',
        text: '可用产品(复选)',
        path: '../detail/mchtProdCheck/mchtProdCheck'
      },
    ],



    showTopTips: false,

    mchtLevs: ["连锁商户", "普通商户"],
    mchtLevIndex: 0,

    stores: ["是", "否"],
    storeIndex: 0,

    isAgree: false
  },

  navigateTo(e) {
    console.log("mchtlist");
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path
    App.WxService.navigateTo(path)
  },



  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },

  bindMchtLevChange: function (e) {
    console.log('picker mchtLev 商户类型-发生选择改变，携带值为', e.detail.value);
    this.setData({
      mchtLevIndex: e.detail.value
    })
  },

  bindStoreChange: function (e) {
    console.log('picker Store 是否门店-发生选择改变，携带值为', e.detail.value);
    this.setData({
      storeIndex: e.detail.value
    });
  },
  // 提交审核
   mchtAdd(e) {
    console.log("nextStep");
    // const index = e.currentTarget.dataset.index
     const path = "../detail/mchtAddResult/mchtAddResult"
    App.WxService.navigateTo(path)
  }

});