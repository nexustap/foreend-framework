
/* 全局指令配置
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define([
	'angular', 
	'services',
	'dynatree'	
	], function() {

	angular.module('itspApp.directives', ['itspApp.services'])
		
		//定义应用介绍的指令
		.directive('appDesc', function(appDesc) {
			return function(scope, elm, attrs) {
				if (attrs.appDesc == 'name') {
					elm.text(appDesc.name);
				} 
			};
		})

		//定义开发框架介绍的指令
		.directive('frameworkDesc', function(frameworkDesc) {
			return function(scope, elm, attrs) {
				if (attrs.frameworkDesc == 'name') {
					elm.text('本产品由 ' + frameworkDesc.name + ' 驱动！');
				} 
			};
		})

		//定义顶层导航栏
		.directive('ailkHeader', function() {
			console.debug('ailkHeader');
			
			return {templateUrl: 'res/nav.html'};
		})

		//定义左边导航栏
		.directive('ailkSidebar', function() {
			console.debug('ailkSidebar');

			return {templateUrl: 'res/sidebar.html', 
				link : function($scope, $route, $location, $routeParams) {
					console.debug('tree');

					//3.响应viewUrlEvenForParent广播事件
					$scope.$on("viewUrlEvenForParent", function (even, msg) { 
				        console.debug("ailkSidebar / viewUrlEvenForParent:" + msg);
				    });

					$("#tree").dynatree({
				        autoFocus: true,
				        minExpandLevel: 1,
				        onFocus: function(node) {
				          if(node.data.href){
				            node.scheduleAction("activate", 1000);
				          }
				        },
				        onBlur: function(node) {
				          node.scheduleAction("cancel");
				        },
				        onClick: function(node){
				          if(node.data.href){
				            console.debug('ailkSidebar / node:' + node);

				            //2.提交到全局事件nodeEven, viewUrlEven在homeController定义
 							$scope.$emit("nodeEven",node);

				            $scope.$route = $route;
							$scope.$location = $location;
							$scope.$routeParams = $routeParams;
				          }
				        }
				      });
				}};
		})

        // 定义左侧快捷栏
        .directive('ailkShortcuts',function(){
            console.debug('ailkShortcuts');

            return {
                templateUrl:"res/shortcuts.html"
            }
        })
});