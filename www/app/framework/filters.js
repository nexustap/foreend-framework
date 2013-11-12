
/* 定义全局过滤器
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define(['angular'],function () {
	
	angular.module('filters', ['services'])
		//定义应用名称的过滤器
		.filter('productDesc', ['appDesc', function(appDesc) {
			return function(text) {
				return String(text).replace(/\%NAME\%/mg, appDesc.name);
			}
		}])
		//定义框架版本的过滤器
		.filter('frameworkDesc', ['frameworkDesc', function(frameworkDesc) {
			return function(text) {
				return String(text).replace(/\%FRAMEWORK VERSION\%/mg, frameworkDesc.name);
			}
		}]);
});
