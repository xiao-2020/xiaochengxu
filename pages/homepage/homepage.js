const app = getApp()
import regeneratorRuntime from '../../regenerator-runtime/runtime.js'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		date: '',
		startDate: '1900-01-01',
		endDate: '',
	},
	// 选取时间之后的值
	bindDateChange(e) {
		this.setData({
			date: e.detail.value
		})
	},
	async onGotUserInfo(e) {
		// 进来之前先吊用一次 来获取授权 之后的用户信息 如果有信息了就直接跳过
		if(!app.globalData.userInfo) {
			await app.getUserInfo(e.detail)
		}
		if(!this.data.date) {
			wx.showModal({
				title: '提示',
				content: '请先选择日期',
			})
			return
		}
		wx.navigateTo({
			url: '/pages/detail/detail?date=' + this.data.date,
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 取出当前时间
		var now = new Date().toLocaleString().split(/\s/)[0]
		// 转化为 picker 需要的格式
		var dateStrArr = now.split('/')
		var newDate = dateStrArr.map(item => item.length === 1 ? ('0' + item) : item).join('-')
		this.setData({
			// date: newDate,
			endDate: newDate
		})
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