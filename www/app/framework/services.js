
/* 定义全局变量
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define(['jsonrpc','angular'],function (jsonrpc, angular) {
	
	angular.module('services', [])

		.value('appDesc', {
			'name' : '前端框架 0.4'
		})
		
		.value('frameworkDesc', {
			'name' : 'foreend.framework 0.5beta20131111'
		})

		.factory('jsonrpc', function($q, $http) {
			var deferred = $q.defer();
			
			function request(method, jsonrpc_id, config) {
				
				if (method == undefined || method == "") {
					throw ("必须填写method参数")
				};

				if (jsonrpc_id == undefined || jsonrpc_id == "") {
					throw ("必须填写jsonrpc_id参数")
				};

				var url;
				if (jsonrpc[jsonrpc_id]) {
					url = jsonrpc[jsonrpc_id]
				} else {
					for(var key in jsonrpc_id) {
						if (jsonrpc[key]) {
							console.debug(jsonrpc[key]);
							url = jsonrpc[key][jsonrpc_id[key]];
							break;
						};
					}
				}

				if (url == undefined || url == "") {
					console.debug(jsonrpc_id + " 地址错误！请仔细查看地址:");
					throw (jsonrpc);
				};
				
				if (config == undefined || config == "") {
					var config = {};
				};
				config.method = method;
				config.url = url;


				 if (angular.lowercase(config.method) == 'get') {

				 	config.dataType = 'json';
				 	config.crossDomain = true;

					$.ajax(config)
						.done(function(data, status) {
							deferred.resolve({data:data, status:status});
						})
						.fail(function(data, status) {
							deferred.reject(data, status);
						});

				 } else {
					$http(config)
						.success(function(data, status) {
							deferred.resolve({data:data, status:status});
						})
						.error(function(data, status) {
							deferred.reject(data, status);
						});
				 }
				
				return deferred.promise;
			}

			return {
				request : request
			};
		});
});