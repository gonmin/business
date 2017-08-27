var conf = {
	serverHost: ''
}
var _mm = {
	request: function (param) {
		var _this = this;
		$.ajax({
			type: param.method || 'get',
			url: param.url || '',
			dataType: param.type || 'json',
			data: param.data || '',
			success: function (res) {
				if (res.status === 0) {
					typeof param.success === 'function' && param.success(res.data, res.msg)
				} else if (res.status === 10) {
					// 没有登陆状态，需要强制登录
					// _this.doLogin();
				}
				else if (res.status === 1) {
					typeof param.error === 'function' && param.error(res.data, res.msg)

				}
			},
			error: function (err) {
				typeof param.error === 'function' && param.error(err.statusText)
			}
		})
	},
	getServerUrl: function () {
		return conf.serverHost + path
	},
	getUrlParam: function (name) {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
		var result = window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	},
	// 统一登录处理
	doLogin: function () {
		window.location.href = './login.html?redirect=' + encodeURIComponenent(window.location.href); 
	}

}

module.exports = _mm;
