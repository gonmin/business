var _mm = require('util/util.js')

require('./index.css');

require('page/common/nav/index');

require('page/common/header/index');

var _cart = require('service/cart-service.js');

var templateIndex = require('./index.string');

// 逻辑部分
var page = {
	data: {
		
	},
	init: function() {
		this.onLoad();
		this.bindEvent();
	},
	onLoad: function () {
		// 如果没有传productId 
		this.loadCart();
	},
	bindEvent: function () {
		var _this = this;
		// 排序的点击事件
		// 事件代理
		$(document).on('mouseenter', '.p-img-item', function () {
			var imageUrl = $(this).find('.p-img').attr('src');
			$('.main-img').attr('src', imageUrl);
		});
	},
	// 加载购物车 数据
	loadCart: function () {
		var _this = this;
		var html = '';
		// 
		_cart.getCartList(function(res) {
			_this.renderCart(res);
		}, function (errMsg) {
			$('.page-wrap').html('<p class="err-tip">哪里不对了，刷新试试吧</p>');
		})
	},
	// 渲染购物车
	renderCart: function (data) {
		this.filter(data);
		// 缓存购物车信息
		this.data.cartInfo = data;

		// 生成HTML
		var cartHtml = _mm.renderHtml(templateIndex, data);

		$('.page-wrap').html(cartHtml);
	},
	filter: function (data) {
		data.notEmpty = !!data.cartProductVoList.length;
	}
}

$(function() {
	page.init();
})
