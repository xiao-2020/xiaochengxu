//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
					// 如果还没有授权，那么就只需要等待用户点击测试的时候 开始授权 就可以了  或者在用户进入页面的时候就可以 启动授权
					this.globalData.userInfo = null
					return;
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
							// 可以将 res 发送给后台解码出 unionId
							this.globalData.userInfo = res.userInfo
							// 登录
							wx.login({
								success: res => {
									// 发送 res.code 到后台换取 openId, sessionKey, unionId
									if (res.code) {
										wx.request({
											url: 'https://secret.hinmu.com/home/index/get_wx_userinfo',
											method:'POST',
											data: {
												code: res.code,
												avatarUrl: this.globalData.userInfo.avatarUrl,
												nickname: this.globalData.userInfo.nickName,
											},
											success:(res) => {
												// 存入登陆状态
												this.globalData.userInfo.userId = res.id
												this.globalData.isLogin = true
											}
										})
									}
								}
							})
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
					// 如果已经授权过 那么就直接吊用 getuserInfo 然后登陆 就可以了
					wx.getUserInfo({
						success: res => {
							// 可以将 res 发送给后台解码出 unionId
							this.globalData.userInfo = res.userInfo
							// 登录
							wx.login({
								success: res => {
									// 发送 res.code 到后台换取 openId, sessionKey, unionId
									if (res.code) {
										wx.request({
											url: 'https://secret.hinmu.com/home/index/get_wx_userinfo',
											data: {
												code: res.code,
												avatarUrl: this.globalData.userInfo.avatarUrl,
												nickname: this.globalData.userInfo.nickName,
											},
											success: (res) => {
												// 存入登陆状态
												this.globalData.isLogin = true
											}
										})
									}
								}
							})
							// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
							// 所以此处加入 callback 以防止这种情况
							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res)
							}
						}
					})
					return ;
					wx.authorize({
						scope: 'scope.userInfo',
						success(res) {
							wx.getUserInfo({
								success: res => {
									// 可以将 res 发送给后台解码出 unionId
									this.globalData.userInfo = res.userInfo
									// 登录
									wx.login({
										success: res => {
											// 发送 res.code 到后台换取 openId, sessionKey, unionId
											if (res.code) {
												wx.request({
													url: 'https://secret.hinmu.com/home/index/get_wx_userinfo',
													data: {
														code: res.code,
														avatarUrl: this.globalData.userInfo.avatarUrl,
														nickname: this.globalData.userInfo.nickName,
													},
													success:(res) => {
														// 存入登陆状态
														this.globalData.isLogin = true
													}
												})
											}
										}
									})
									// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
									// 所以此处加入 callback 以防止这种情况
									if (this.userInfoReadyCallback) {
										this.userInfoReadyCallback(res)
									}
								}
							})
						}
					})
				}
      }
    })

		// 下载 图片
		this.downloadFile()
  },
	downloadFile() {
		return new Promise((resolve, reject) => {
			wx.downloadFile({
				url: 'https://secret.hinmu.com/Uploads/static/bg_content.png',
				success: (res) => {
					this.globalData.baseImg = res.tempFilePath;
					resolve()
				},
				fail() {
					reject('资源下载失败')
				}
			})
		})
	},
	getUserInfo(res) {
		return new Promise((resolve, reject) => {
			// 可以将 res 发送给后台解码出 unionId
			this.globalData.userInfo = res.userInfo
			// 登录
			wx.login({
				success: res => {
					// 发送 res.code 到后台换取 openId, sessionKey, unionId
					if (res.code) {
						wx.request({
							url: 'https://secret.hinmu.com/home/index/get_wx_userinfo',
							method: 'POST',
							data: {
								code: res.code,
								avatarUrl: this.globalData.userInfo.avatarUrl,
								nickname: this.globalData.userInfo.nickName,
							},
							success: (res) => {
								// 存入登陆状态
								this.globalData.userInfo.userId = res.id
								this.globalData.isLogin = true
							}
						})
					}
				}
			})
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			if (this.userInfoReadyCallback) {
				this.userInfoReadyCallback(res)
			}
		})
	},
  globalData: {
    userInfo: null,
		isLogin: false,
		baseImg: null
  }
})