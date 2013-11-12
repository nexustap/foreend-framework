
/* 全局指令配置
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define(['require',
	'angular',
	'framework/directives/appDesc',
	'framework/directives/frameworkDesc',
	'framework/directives/formElement'
	],function (require) {

	angular.module('directives', ['services'])
		
		//定义应用介绍
		.directive('appDesc', function(appDesc) {
			var directive = require('framework/directives/appDesc');
			directive.setData(appDesc);
			return directive;
		})

		//定义开发框架介绍
		.directive('frameworkDesc', function(frameworkDesc) {
			var directive = require('framework/directives/frameworkDesc');
			directive.setData(frameworkDesc);
			return directive;
		})

		//动态表单元素
		.directive('formElement', function(formElement) {
			var directive = require('framework/directives/formElement');
			directive.setData(frameworkDesc);
			return directive;
		})
});