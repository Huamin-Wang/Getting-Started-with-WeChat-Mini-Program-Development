
const db = wx.cloud.database() // 获取数据库实例
const collection = db.collection('situation') // 连接名为"situation"的集合
Page({
data: {
  name: "",
  age: 0
},
  onLoad() {
    console.log("----数据库操作中---")
    // 调用添加数据的方法
    
  },
  // 将addData定义为页面方法，便于调用
  async addData() {
    try {
      const res = await collection.add({
        data: { 
          name: this.data.name, 
          age: this.data.age,
          createTime: db.serverDate() // 建议添加时间戳，方便后续查询排序
        }
      })
      console.log('添加成功', res)
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 2000
      })
    } catch (err) {
      console.error('添加失败', err)
      wx.showToast({
        title: '添加失败',
        icon: 'none',
        duration: 2000
      })
    }
  },
  onSubmit(e) {
    const { name, age } = e.detail.value;
    // 这里可以处理 name 和 age
    console.log('姓名:', name, '年龄:', age);
    this.setData({
      name:name,
      age:age
    })
    //设置本页面data的数据
    this.addData()
  }
})