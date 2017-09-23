require('./index.css')

var _mm = require('util/util.js')

require('page/common/nav-simple/index');

$(function() {
	var type = _mm.getUrlParam('type') || 'default';
	var $element = $('.' + type + '-success');

	// 显示对应的提示元素
	$element.show();

})