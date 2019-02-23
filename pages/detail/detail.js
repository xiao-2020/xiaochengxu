import regeneratorRuntime from '../../regenerator-runtime/runtime.js'
const app = getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// 性格特征
		characterdetail: '<p>\r\n\t7号是世故型性格的人，顾名思义是善于交际，处事\r\n<\/p>\r\n<p>\r\n\t圆滑，非常有人缘，朋友多的人，他们精明能干，在\r\n<\/p>\r\n<p>\r\n\t人际关系上左右逢源，这种性格的人大多是权力型的\r\n<\/p>\r\n<p>\r\n\t人，他们一旦获得了权力，行为方式与指导思想就比\r\n<\/p>\r\n<p>\r\n\t较谨慎，所以不会是开拓型领导，他们是博学的，天\r\n<\/p>\r\n<p>\r\n\t生懂得提出和分析问题，如果不利用这种天赋就会觉\r\n<\/p>\r\n<p>\r\n\t得非常沮丧，如果他们寻找到真理的时候却又不敢面\r\n<\/p>\r\n<p>\r\n\t对现实，生活就会变得虚伪不真实，永远没有幸福可\r\n<\/p>\r\n<p>\r\n\t言。\r\n<\/p>',
		// 优劣分析
		characteranaly:'<p>\r\n\t7号人应该保持好奇心和求知欲，不断分析和质疑周边\r\n<\/p>\r\n<p>\r\n\t的大小事，他们应该保持开放的心胸，用于尝试新事\r\n<\/p>\r\n<p>\r\n\t物认识新朋友，与人分享新观念，并在心灵层次修持\r\n<\/p>\r\n<p>\r\n\t进取，许多7号人穷其一生想不透自己的人生到底出\r\n<\/p>\r\n<p>\r\n\t了什么差错，总觉得自己被环境困住，始终对现状感\r\n<\/p>\r\n<p>\r\n\t到无奈。想要获得快乐踏实，7号人必须先接受事实\r\n<\/p>\r\n<p>\r\n\t真相面对问题，采取适切的行动解决问题。\r\n<\/p>',
		// 人生目标
		characterobjective:'<p>\r\n\t7号人应该保持好奇心和求知欲，不断分析和质疑周边\r\n<\/p>\r\n<p>\r\n\t的大小事，他们应该保持开放的心胸，用于尝试新事\r\n<\/p>\r\n<p>\r\n\t物认识新朋友，与人分享新观念，并在心灵层次修持\r\n<\/p>\r\n<p>\r\n\t进取，许多7号人穷其一生想不透自己的人生到底出\r\n<\/p>\r\n<p>\r\n\t了什么差错，总觉得自己被环境困住，始终对现状感\r\n<\/p>\r\n<p>\r\n\t到无奈。想要获得快乐踏实，7号人必须先接受事实\r\n<\/p>\r\n<p>\r\n\t真相面对问题，采取适切的行动解决问题。\r\n<\/p>',
		// 
		user: {
			labels: ['领导','创造','自信']
		}, // 用户信息
		isReady: false, // 监听页面逻辑是否处理完成
		date: '', // 用户填写的生日
    canvasWidth: 637,
    canvasHeight: 369,
		canvasScale: 1,
		characterEcharsBoxHeight: 'aauto',
		avatarUrl: '',
		pos: {
			a: {
				x: 341,
				y: 296,
				value: 0,
				fontSize: 15 
			},
			b: {
				x: 363,
				y: 296,
				value: 0,
				fontSize: 15
			},
			c: {
				x: 385,
				y: 296,
				value: 0,
				fontSize: 15
			}, 
			d: {
				x: 406,
				y: 296,
				value: 0,
				fontSize: 15
			}, 
			e: {
				x: 278,
				y: 296,
				value: 0,
				fontSize: 15
			}, 
			f: {
				x: 300,
				y: 296,
				value: 0,
				fontSize: 15
			}, 
			g: {
				x: 226,
				y: 296,
				value: 0,
				fontSize: 15
			}, 
			h: {
				x: 248,
				y: 296,
				value: 0,
				fontSize: 15
			}, 
			i: {
				x: 339,
				y: 248,
				value: 0,
				fontSize: 19
			},
			j: {
				x: 386,
				y: 248,
				value: 0,
				fontSize: 19
			},
			k: {
				x: 285,
				y: 248,
				value: 0,
				fontSize: 19
			},
			l: {
				x: 239,
				y: 248,
				value: 0,
				fontSize: 19
			},
			m: {
				x: 348,
				y: 192,
				value: 0,
				fontSize: 19
			},
			n: {
				x: 276,
				y: 192,
				value: 0,
				fontSize: 19
			},
			o: {
				x: 309,
				y: 141,
				value: 0,
				fontSize: 19
			},
			p: {
				x: 203,
				y: 137,
				value: 0,
				fontSize: 19
			},
			q: {
				x: 236,
				y: 137,
				value: 0,
				fontSize: 19
			},
			r: {
				x: 154,
				y: 137,
				value: 0,
				fontSize: 19
			},
			s:{
				x: 334,
				y: 70,
				value: 0,
				fontSize: 19
			},
			t:{
				x: 281,
				y: 70,
				value: 0,
				fontSize: 19
			},
			u:{
				x: 309,
				y: 28,
				value: 0,
				fontSize: 19
			},
			v:{
				x: 382,
				y: 137,
				value: 0,
				fontSize: 19
			},
			w:{
				x: 414,
				y: 137,
				value: 0,
				fontSize: 19
			},
			x:{
				x: 464,
				y: 137,
				value: 0,
				fontSize: 19
			}
		}
	},
	async getPageData() {
		let promiseArr = []
		let numResult = await new Promise(r => {
			wx.request({
				url: 'https://secret.hinmu.com/home/index/get_my_numbers',
				method: 'POST',
				data: {
					user_id: 1,
					date: this.data.date
				},
				success: res => {
					if(res.data && typeof res.data === 'object') {
						r(res.data.content)
					} else {
						r(res.data)
					}
				}
			})
		})
		if (numResult) {
			wx.request({
				url: 'https://secret.hinmu.com/home/index/get_life_passport',
				method: 'POST',
				data: {
					'number': ''
				}
			})
		}
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		console.log(app.globalData)
		let date = options.date,
			// userId = app.globalData.userInfo.userId,
			ctx = wx.createCanvasContext('canvas')
		this.setData({
			date: date,
			// avatarUrl: app.globalData.userInfo.avatarUrl
		})
		// 获取页面数据
		this.getPageData()
		// 处理cavans 和 富文本的渲染
		await new Promise(async (resolve,reject) => {
			// 第一步 将图片 画到 默认的画布上
			// 获取图片  如果此时没有 则在掉一次获取
			if (!app.globalData.baseImg) {
				await app.downloadFile()
			}
			ctx.drawImage(app.globalData.baseImg, 0, 0)
			let numObj = this.data.pos
			let numArr = Object.keys(numObj)
			numArr.forEach(key => {
				let valObj = numObj[key] || {}
				ctx.setFontSize(valObj.fontSize)
				ctx.fillText(valObj.value, valObj.x + 4, valObj.y + 16)
			})
			await new Promise((resolve, reject) => {
				ctx.draw(true, () => {
					resolve()
				})
			})
      
			let ratio = 369 / 637
			wx.getSystemInfo({
				success: res => {
          console.log(res.screenWidth, res.pixelRatio)
					let scale = (res.screenWidth - 60) / 637
					this.setData({
						canvasScale: scale,
						characterEcharsBoxHeight: scale * 369 + 50
					});
					return;
          // this.setData({
          //   canvasScale: res.screenWidth / 637
          // })
					wx.canvasToTempFilePath({
						x: 0,
						y: 0,
            width: 637,
            height: 369,
            destWidth: 637 / res.pixelRatio,
            destHeight: 637 / res.pixelRatio * ratio,
						canvasId: 'canvas',
						success: async res => {
							console.log(res.tempFilePath)
							this.setData({
								isReady: true,
								imgSrc: res.tempFilePath
							})
						}
					})
				}
			})
		})
		// 此时应当处理完再显示页面
		// 
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		WxParse.wxParse('characterdetail', 'html', this.data.characterdetail, this, 5);
		WxParse.wxParse('characteranaly', 'html', this.data.characteranaly, this, 5);
		WxParse.wxParse('characterobjective', 'html', this.data.characterobjective, this, 5);
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