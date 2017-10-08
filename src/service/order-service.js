var _mm = require('util/util')

var  _order = {
	// 获取商品列表
	getProductList: function (resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/order/get_order_cart_product.do'),
			success: resolve,
			error: reject
		})
	},
	// 获取商品列表
	getProductDetail: function (productId, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/product/detail.do'),
			data: {
				productId: productId	
			},
			success: resolve,
			error: reject
		})
	}
}

module.exports = _order;
