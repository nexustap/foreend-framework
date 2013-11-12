
/*
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-07
 * Version: $Revision$
 */

'use strict';

define([
	'./controllers'
	],function(controllers){

	return {
		baseUrl : "js",					//当前工程js代码路径
		appName : "demo",				//当前工程的名称
		
		paths : {						//公共路径
			framework		: "../../framework",						//framework路径
			jsonrpc			: "config/datasource",						//jsonrpc地址
			controllers 	: "config/controllers",						//controllers配置地址
		},

		routes : [					//路由配置
			{url: '/home', config:{templateUrl: 'views/home/tabs.html', controller: 'tabsCtrl'}},
			{url: '/tabs', config:{templateUrl: 'views/home/tabs.html', controller: 'tabsCtrl'}},
			{url: '/tabs/frame', config:{templateUrl: 'views/home/tabs.html', controller: 'tabsCtrl'}},
			{redirectTo: '/home'}
		],

		controllers : controllers,	//controller配置
	}
});