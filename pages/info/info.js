// pages/info/info.js
Page({
data:{
  localUserList:[]
},
  onLoad() {
    this.getDataFromCloud()
  },

  // 从云数据库读取数据的方法
  getDataFromCloud() {
    // 1. 获取数据库引用
    const db = wx.cloud.database()
    
    // 2. 选择要操作的集合（表）
    const collection = db.collection('situation') // 替换为你的集合名
    
    // 3. 读取数据
    collection
      .get() // 获取集合中所有记录
      .then(res => {
        // 读取成功
        console.log('数据读取成功', res.data)
        // 获取App实例，然后设置全局数据
        const app = getApp()
        app.globalData.userList = res.data
          // 2. 将全局变量同步到页面data
    this.setData({
      localUserList: app.globalData.userList
    })
      })
      .catch(err => {
        // 读取失败
        console.error('数据读取失败', err)
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */

navigateToHome: function() {
  wx.navigateTo({
    url: '/pages/index/index'
  })
}
})