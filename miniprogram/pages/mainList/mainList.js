//index.js
const app = getApp()

Page({
  data: {
    items: [],
    tops: [],
  },

  onLoad: function () {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    this.getItems()
  },

  getItems: function () {
    const db = wx.cloud.database()
    db.collection('pet').get({
      success: res => {
        console.log(res)
        this.setData({
          items: res.data,
          tops: res.data
        }
        )
      }
    })
  },

  onItemDetail(event) {
    console.log(event)
    wx.redirectTo({
      url: '../petDetail/petDetail?id=' + event.currentTarget.dataset.id,
    })
    // const db = wx.cloud.database()
    // db.collection('category').doc(event.currentTarget.dataset.id).get(
    //   {
    //     success: res => {
    //       wx.redirectTo({
    //         url: '../commonWeb/commonWeb?url=' + res.data.url,
    //       })
    //     }
    //   }
    // )
  }
})
