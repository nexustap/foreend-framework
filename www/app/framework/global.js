
/* frame启动文件
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define(['./utils/tools'],function(tools){

	var baseConfig = {
		//路径配置
		paths : {
			//设置公共库
			text : 'lib/requirejs/text',
			angular : 'lib/angular-1.2.0/angular',
			angularCookies : 'lib/angular-1.2.0/angular-cookies.min',
			angularRoute : 'lib/angular-1.2.0/angular-route.min',
			angularBootstrap : '/lib/angular-bootstrap/ui-bootstrap-tpls-0.6.0-custom',
			jquery : 'lib/jquery/jquery-1.9.1',
			jqueryui : 'lib/jquery-ui/js/jquery-ui-1.10.3.custom.min',
			bootsrap : 'lib/bootstrap/js/bootstrap',
			jqGrid			: "lib/utils/jqgrid/jquery.jqGrid.min",
			jqGridLocale	: "lib/utils/jqgrid/i18n/grid.locale-cn",
		},

		//依赖关系配置
		shim :　{
			jquery: {
            	exports: '$'
        	},
			jqueryui: {
	            exports: "$",
	            deps: ['jquery']
	        },
	        angular:{
				exports:'angular'
			},
			angularCookies : ['angular'],
			angularRoute: ['angular'],
			angularBootstrap: ['angular'],
			bootsrap: ['jquery'],
			jqGridLocale:['jquery'],
			jqGrid:['jquery','jqGridLocale'],
		},

		//优先级配置
		priority:[
			'angular'
		]
	}


	function setBaseConfig(value) {

		//参数获取并校验
		baseConfig.baseUrl = tools.getSubsFromObj(value, "baseUrl");
		baseConfig.controllers = tools.getSubsFromObj(value, "controllers");
		baseConfig.appName = tools.getSubsFromObj(value, "appName");
		baseConfig.routes = tools.getSubsFromObj(value, "routes");

		var paths = tools.getSubsFromObj(value, "paths");
		var framework = tools.getSubsFromObj(paths, "framework");
		tools.getSubsFromObj(paths, "jsonrpc");

		//paths路径修改,加入framework路径
		for(var k in baseConfig.paths) {
			baseConfig.paths[k] = framework + "/" + baseConfig.paths[k];
		};

		//路径合并
		baseConfig.paths = tools.concatObj(baseConfig.paths, paths)

		//shim合并
		if (value.shim) {
			baseConfig.shim = tools.concatObj(baseConfig.shim, value.shim);
		}
	}

	function start() {
		console.debug("start " + baseConfig.appName);
		console.debug(baseConfig);

		//导入配置
		require.config(baseConfig);

		//启动应用
		require(['require',
			'angular',
			'jquery',
			'bootsrap',
			'framework/app',
			'framework/routes'
		], function (require, angular) {

			var app = require('framework/app');
			app.setConfig(baseConfig);

			var routes = require('framework/routes');
			routes.setRoutes(baseConfig.routes);
			routes.start(app.starter());

			//启动应用
			$(document).ready(function () {
				angular.bootstrap(document, [baseConfig.appName]);
			});

		});
	};

	return {
		setBaseConfig : setBaseConfig,
		start : start
	};
})



