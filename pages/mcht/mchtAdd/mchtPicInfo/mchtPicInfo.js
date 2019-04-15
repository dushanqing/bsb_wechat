const App = getApp()

Page({
  data: {
    threeToOne: ["是", "否"],
    threeToOneIndex: 0,
  },

  /**
   * 是否三证合一
   * 系统码值：0-否，1-是
   */
  bindThreeToOneChange: function (e) {
    console.log('是否三证合一-发生选择改变，携带值为', e.detail.value);
    this.setData({
      threeToOneIndex: e.detail.value
    })
  },

  // 电子信息页面 下一步
  mchtPicNextStep(e) {
    console.log("nextStep");
    const path = "../mchtProdInfo/mchtProdInfo"
    App.WxService.navigateTo(path)
  }

});