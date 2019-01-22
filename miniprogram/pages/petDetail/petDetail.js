Page({
  data: {
    id:'',
    pet:{},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  onLoad: function (ops) {
    this.setData({
      id: ops.id
    })
    this.fetchPetDetail(ops.id)
  },

  fetchPetDetail: function (id) {
    
    const db = wx.cloud.database()
    db.collection('pet').doc(id).get({
      success: res => {
        console.log(res)
        this.setData({
          pet: res.data
        }
        )
      }
    })
  },
  
  onBackHome: function(){
    wx.redirectTo({
      url: '../mainList/mainList',
    })
  },

  onItemDetail(event){
    console.log(event)
    wx.previewImage({
      urls: event.currentTarget.dataset.imgs// 需要预览的图片http链接列表  
    })
  }
})