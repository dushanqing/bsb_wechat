// data: {
//   info: { },
//   hidden: false
// },
// onLoad: function (e) {
//   console.log(e)
//   this.fetchBookData(e.id)
// },
// //获取微信精选
// fetchBookData: function(id) {
//   let self = this;
//   wx.request({
//     url: API.ebookinfo(id),
//     success: function (res) {
//       self.setData({
//         info: res.data,
//         hidden: true
//       })
//     }
//   })



Page({
  data: {
    checkboxItems:[],
    // checkboxItems:[
    //     { name: 'PD1001', value: '微信零费率' },
    //     { name: 'PD1002', value: '微信一般类' },
    //     { name: 'PD1003', value: '微信六费率' },
    //     { name: 'PD1004', value: '支付宝零费率' },
    //     { name: 'PD1005', value: '银联减免类' },
    //     { name: 'PD1006', value: '网联支付宝一般类' },
    // ],
    hidden: false
  },
  onShow() {
    this.getStorageInfo()
  },
  getStorageInfo() {
    var rr = [{ name: 'PD1001', value: '微信零费率' },
    { name: 'PD1002', value: '微信一般类' },
    { name: 'PD1003', value: '微信六费率' },
    { name: 'PD1004', value: '支付宝零费率' },
    { name: 'PD1005', value: '银联减免类' },
    { name: 'PD1006', value: '网联支付宝一般类' }]

  //  从缓存中取
    wx.getStorage({
      key: 'productCheck',
      success(res) {
        console.log("缓存中的产品：" + res.data)
        var checked = res.data
        var changed = {}
        for (var i = 0; i < rr.length; i++) {
          // if (checked.indexOf(rr[i].name) !== -1) {
          changed['checkboxItems[' + i + '].checked'] = true
          // } else {
          //   changed['checkboxItems[' + i + '].checked'] = false
          // }
        }
      }
    })
    this.setData({
      checkboxItems: rr,
    })
    this.setData(changed)
  },

  checkboxChange: function (e) {
    console.log("可用产品复选框"+e.detail.value)
    var checked = e.detail.value
    var changed = {}
    console.log("this.data:" + this.data)
    console.log("this.data.checkboxItems:" + this.data.checkboxItems)
    console.log("this.data.checkboxItems.length:" + this.data.checkboxItems.length);
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true
        
      } else {
        changed['checkboxItems[' + i + '].checked'] = false
      }
    }
    //将值保存到本地缓存中
    wx.setStorage({key: 'productCheck',data: checked })
    // 从缓存中取
    // wx.getStorage({
    //   key: 'productCheck',
    //   success(res) {
    //     console.log("缓存中的产品：" + res.data)
    //   }
    // })
    this.setData(changed)
  

  },
  
  tapEvent: function (e) {
    console.log('按钮被点击')
  }
})
