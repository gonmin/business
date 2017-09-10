var _mm = require('util/util')

var  _cart = {
	// 退出
	getCartCount: function (resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/user/logout.do'),
			method: 'POST',
			success: resolve,
			error: reject
		})
	}
}

module.exports = _cart;
