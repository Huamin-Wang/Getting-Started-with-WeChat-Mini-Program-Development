App({
  globalData:{
    userList:[]
  },
  onLaunch() {
    // 初始化云开发环境
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true, // 记录用户访问
        env: 'cloud1-4gzvpbxt38981074' // 替换为自己的云环境ID（在云开发控制台获取）
      })
    }
  }
})