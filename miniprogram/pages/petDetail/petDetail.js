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
  

})