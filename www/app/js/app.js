
/* 定义应用，全局系统配置。
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define([
	'angular',
	'angularBootstrap',
	'angularCookies',
	'controllers',
	'directives',
	'filters',
	'services'
	], function () {
		return angular.module('itspApp', [
			'ngCookies',			//加入angular cookie
			'ui.bootstrap',			//加入angular ui bootstrap
			'itspApp.controllers',	//全局controllers配置或定义
			'itspApp.filters',		//全局过滤器配置或定义
			'itspApp.services',		//全局服务配置或定义
			'itspApp.directives'	//全局指令配置或定义
		]);
});