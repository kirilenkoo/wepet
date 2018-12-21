//index.js
const app = getApp()

Page({
  data: {
    items: []
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
    db.collection('item').get({
      success: res => {
        console.log(res)
        this.setData({
          items: res.data
        }
        )
      }
    })
  },

  onItemDetail(event) {
    console.log(event)
    const db = wx.cloud.database()
    db.collection('category').doc(event.currentTarget.dataset.id).get(
      {
        success: res => {
          wx.redirectTo({
            url: '../commonWeb/commonWeb?url=' + res.data.url,
          })
        }
      }
    )
  }
})
