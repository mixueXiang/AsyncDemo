/*
 工具类
 */
define('Utils', function () {

	var Utils = {
		
		getAjaxData: function (url, params, success, failed) {
			Utils.ajax.get(url, params, success, failed);
		},

		postAjaxData: function (url, params, postdata, success, failed) {
			Utils.ajax.post(url, params, postdata, success, failed);
		},


		ajax: (function () {
			function send(url, method, params, postData, success, failed, responseType) {
				var xhr = null;
				if (window.XMLHttpRequest) {
					xhr = new XMLHttpRequest();
				} else if (window.ActiveXObject) {
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}
				if (xhr != null) {
					var fullUrl = url,
						urlParam = Utils.param(params);
					if (urlParam) {
						fullUrl = url + '?' + urlParam;
					}
					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4) {
							if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
								let data = xhr.responseText;

								if (responseType == 'json') {
									var json = {};

									try {
										json = JSON.parse(data);
									} catch (e) {
										console.error('JSON decode error', url)
									}
									success && success(json);
								} else {
									success && success(data);
								}
							} else {
								let data = xhr.responseText;
								failed && failed(data);
							}
						}
					};
					xhr.open(method, fullUrl, true);
					xhr.setRequestHeader("Accept", "*/*");
					xhr.setRequestHeader("X-Requested-With", 'XMLHttpRequest');
					var body;
					if (postData) {
						var bodies = [];
						for (var name in postData) {
							bodies.push(name + '=' + encodeURIComponent(postData[name]));
						}
						body = bodies.join('&');
						if (body.length) {
							xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
						}
					}
					xhr.send(body);
				}
			}

			return {
				get: function (url, params, success, failed) {
					send(url, 'GET', params, null, success, failed, 'json');
				},
				post: function (url, params, postData, success, failed) {
					 send(url, 'POST', params, postData, success, failed, 'json');
				}
			};
		})(),

		param: function (obj) {
			var temp = [];
			for (var key in obj) {
				temp.push(key + '=' + encodeURIComponent(obj[key]));
			}
			return temp.join('&');
		},
        
	};

	return Utils;
});
