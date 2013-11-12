
/* 定义应用，全局系统配置。
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define([
	'require',
	'angular',
	'angularCookies',
	'angularRoute',
	'angularBootstrap',
	'./controllers',
	'./directives',
	'./filters',
	'./services',
],function (require) {

	var config;

	var setConfig = function(value) {
		config = value;
	}

	var starter = function() {

		var controllers = require('./controllers');
		controllers.setDependencies(config.controllers);
		controllers.load();

		return angular.module(config.appName, [
			'ngRoute',
			'ngCookies',		//加入angular cookie
			'ui.bootstrap',		//加入angular ui bootstrap
			'filters',			//全局过滤器配置或定义
			'services',			//全局服务配置或定义
			'directives',		//全局指令配置或定义
			'controllers',		//全局controllers配置或定义
		]);
	}

	return {
		setConfig:setConfig,
		starter:starter
	};
});