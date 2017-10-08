var _mm = require('util/util.js')

require('./index.css');

require('page/common/nav/index');

require('page/common/header/index');

var _order = require('service/order-service.js');
var _address = require('service/address-service.js');

var templateProduct = require('./product-list.string');
var templateAddress = require('./address-list.string');

// 逻辑部分
var page = {
	data: {
		selectedAddress: null
	},
	init: function() {
		this.onLoad();
		this.bindEvent();
	},
	onLoad: function () {
		// 如果没有传productId 
		this.loadProductList();
		this.loadAddressList();
	},
	bindEvent: function () {
		var _this = this;
		// 商品的选择和取消选择
		// 事件代理
		

		// 提交购物车
		// $(document).on('click', '.btn-submit', function () {
		// })

	},
	showCartError: function () {
		$('.page-wrap').html('<p class="err-tip">哪里不对了，刷新试试吧</p>');

	},
	// 加载地址列表
	loadAddressList: function () {
		var _this = this;
		// 获取地址列表
		_address.getAddressList(function(res) {
			var addressListHtml = _mm.renderHtml(templateAddress, res);
			$('.address-con').html(addressListHtml);
		}, function (errMsg) {
			$('.address-con').html('<p class="err-tip">地址加载失败，请稍后重试</p>');
		})
	},
	// 加载商品列表
	loadProductList: function () {
		var _this = this;
		// 获取地址列表
		_order.getProductList(function(res) {
			var productListHtml = _mm.renderHtml(templateProduct, res);
			$('.product-con').html(productListHtml);
		}, function (errMsg) {
			$('.product-con').html('<p class="err-tip">商品信息加载失败，请稍后重试</p>');
		})
	},
	filter: function (data) {
		data.notEmpty = !!data.cartProductVoList.length;
	}
}

$(function() {
	page.init();
})