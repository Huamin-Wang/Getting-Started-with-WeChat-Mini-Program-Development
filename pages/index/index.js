// index.js
const db = wx.cloud.database()
Page({
  onLoad() {

  },
  onSubmit(e) {
    console.log("按钮被点击！")
    db.collection("students").add({
      data: {
        name: e.detail.value.name,
        age: e.detail.value.age
      }
    }).then(res => {
      console.log("添加成功")
    })
  }
})
