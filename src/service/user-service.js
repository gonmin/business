var _mm = require('util/util')

var  _user = {
	// 退出
	logout: function (resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/user/logout.do'),
			method: 'POST',
			success: resolve,
			error: reject
		})
	},
	// 检查登录
	checkLogin: function (resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/user/get_user_info.do'),
			method: 'POST',
			success: resolve,
			error: reject
		})
	}
}

module.exports = _user;
