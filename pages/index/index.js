// index.js

Page({
  data: { keyword: "" },
  onInput(e) {
    this.setData({ keyword: e.detail.value });
    console.log("输入的内容为：", this.data.keyword);
  },
  formSubmit(e){
    console.log("表单整体数据：", e.detail.value)
 console.log("username:",e.detail.value.username)   //表单整体数据为e.detail.value
 console.log("password:",e.detail.value.password)
  }
});
