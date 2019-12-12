// components/Nav/Nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title:'',
    navCurrent:0,
    navList:[],
  },
  /**
   * 组件的方法列表
   */
  methods: {
  navActive(e){
    console.log(e);
    this.setData({
       navCurrent:e.currentTarget.dataset.index
    })
    if(e.currentTarget.dataset.index==1){
      wx.redirectTo({
        url: '../../pages/animation/animation'
    })
  }
  },
  getNavList(){
    let that=this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d590978d3185331448bb542/bilibili/navlist',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
         console.log(res.data);
         if(res.data.code===0){
           that.setData({
             navList:res.data.data.navlist
           })
         }
      }
    })
  },
  test(){
    this.setData({
      title:'nav'
    })
  },
  },
  created() {
    this.getNavList();
  }
})
