// miniprogram/pages/jindex/jindex.js
Page({

  /**
   * 页面的初始数据
   */
  

  data: {
    imgUrls: [
       'https://tse1-mm.cn.bing.net/th/id/R-C.b3a7697d2793ba094a861d546c31190d?rik=NevOIW4XmkUuMA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50069%2f5445.jpg_wh1200.jpg&ehk=wuLPicg%2b9wXz8QAwp%2fAVFBtJQ6loBUiVfQZu2bbZODA%3d&risl=&pid=ImgRaw&r=0',
       'https://img.zcool.cn/community/01fc295d6c6fe8a80120526da4918a.jpg@3000w_1l_0o_100sh.jpg',
      'https://tse1-mm.cn.bing.net/th/id/R-C.862e3724bf81688d83147429ce8eee0b?rik=LXnFex91TCcJBA&riu=http%3a%2f%2fimage.qianye88.com%2fpic%2f2afb76f6a8d4a152b0546ed8c9caf3d5&ehk=ggkMTkkK4WwEPEPYCbVcCV6mqTZDwbjqvhv3z1Zz14s%3d&risl=&pid=ImgRaw&r=0'
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: ""
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      icon20: 'https://tse1-mm.cn.bing.net/th/id/R-C.b3a7697d2793ba094a861d546c31190d?rik=NevOIW4XmkUuMA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50069%2f5445.jpg_wh1200.jpg&ehk=wuLPicg%2b9wXz8QAwp%2fAVFBtJQ6loBUiVfQZu2bbZODA%3d&risl=&pid=ImgRaw&r=0',
      icon60: 'https://img.zcool.cn/community/01fc295d6c6fe8a80120526da4918a.jpg@3000w_1l_0o_100sh.jpg',
      xi:'https://tse1-mm.cn.bing.net/th/id/R-C.862e3724bf81688d83147429ce8eee0b?rik=LXnFex91TCcJBA&riu=http%3a%2f%2fimage.qianye88.com%2fpic%2f2afb76f6a8d4a152b0546ed8c9caf3d5&ehk=ggkMTkkK4WwEPEPYCbVcCV6mqTZDwbjqvhv3z1Zz14s%3d&risl=&pid=ImgRaw&r=0'
  });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})