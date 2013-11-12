
/* 动态表单
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-09
 * Version: $Revision$
 */


'use strict';

define([], function () {

	function FormelementsModel(jsonrpc) {
		var _self = this;

		function queryLocal() {
			console.debug("FormelementsModel / queryLocal ")

		  	var elements = [
		  		{id: "1", label : "输入一", placeholder: "输入一", type: "text"},
		  		{id: "2", label : "输入二", placeholder: "输入二", type: "date"},
		  		{id: "3", label : "输入三", placeholder: "输入三", type: "email"},
		  		{id: "4", label : "输入四", placeholder: "输入四", type: "datetime"},
		  		{id: "5", label : "输入五", placeholder: "输入五", type: "number"},
		  		{id: "6", label : "输入六", placeholder: "输入六", type: "url"},
		  		{id: "7", label : "输入七", placeholder: "输入七", type: "color"},
		  		{id: "8", label : "输入八", placeholder: "输入八", type: "text"},
		  		{id: "9", label : "输入九", placeholder: "输入九", type: "text"},
		  		{id: "10", label : "输入十", placeholder: "输入十", type: "text"},
		  		{id: "11", label : "输入十一", placeholder: "输入十一", type: "text"},
		  	];

			return elements;
		}

		function queryRemote(params, callback) {
			console.debug("FormelementsModel / queryRemote");

			jsonrpc.request("GET", "querySpecAttrs",{data:params}).then(
				//成功
				function(result) {
					(callback && typeof(callback) === "function") && callback(result.data, 1);
				}, 
				//失败
				function(result) {
					(callback && typeof(callback) === "function") && callback(null, -1);
				});
		}

		return {
			queryLocal : queryLocal,
			queryRemote : queryRemote
		};
	}

	return FormelementsModel;
});