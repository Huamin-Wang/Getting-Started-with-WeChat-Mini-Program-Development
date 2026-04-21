// pages/searchResult/searchResult.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    keyword: "",
    city: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      keyword: options.keyword || "",
      city: options.city || ""
    });
    console.log("接收到的参数 - 省份：", this.data.keyword, "省会：", this.data.city);
  }
})