
/* 演示的业务逻辑定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-05
 * Version: $Revision$
 */

'use strict';

define([], function () {

		function DemoModel(jsonrpc) {
			console.debug("DemoModel");
			
			var _self = this;

			this.title = 'Ok!I am ready!';

			this.testFunc = function() {
				var content = _self.title;
				return content;
			};

			this.testJson = function(callback) {

				jsonrpc.request("jsonp", {demo:'greet'}).then(
					//成功返回
					function(result) {
				  		(callback && typeof(callback) === "function") && callback(result.data, result.status);
					}, 
					//失败返回
					function(result) {
				  		(callback && typeof(callback) === "function") && callback(result.data, result.status);
					});
			}
		}

		return DemoModel;
});
							