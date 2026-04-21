Page({
  data: {
    keyword: "",
    city: ""
  },

  // 每次输入框数据有变化则执行
  onInput(e) {
    this.setData({
      keyword: e.detail.value
    });
    console.log("输入的内容为：", this.data.keyword);
  },

  // 查询功能
  search() {
    console.log("开始查询：", this.data.keyword);
    
    // 如果是福建，则返回福州，如果是广东，则返回广州
    if (this.data.keyword === "福建") {
      this.setData({
        city: "福州"
      });
    } else if (this.data.keyword === "广东") {
      this.setData({
        city: "广州"
      });
    }
    
    // 跳转到搜索结果页面，传递 keyword 和 city
    wx.navigateTo({
      url: `/pages/searchResult/searchResult?keyword=${this.data.keyword}&city=${this.data.city}`
    });
  }
})

