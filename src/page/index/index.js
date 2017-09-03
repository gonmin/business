// cats = require('./cats.js');

// console.log(cats);

// var $$ = require('jquery');

// $$('body').html('HELLO 龚明欢');

// require('../login/module.js');

// require('./index.css');

var _mm = require('util/util.js')

var data = {
	data: 'test'
}
var html = '<div>{{data}}</div>';

console.log(_mm.renderHtml(html, data));
