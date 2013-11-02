
/* index.html的顶层控制器
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-28
 * Version: $Revision$
 */


'use strict';

define([], function () {

    function HomeController($scope) {
        console.debug("HomeController start");

        //1.定义一个广播的事件，监听viewUrlEven-url路径
	    $scope.$on("viewUrlEven", function (even, msg) { 
	           console.debug("HomeController / viewUrlEven:" + msg);
	           $scope.$broadcast("viewUrlEvenForParent", msg); 
	       });

	    //1.定义一个广播事件，监听nodeEven-左边树形菜单点击返回的内容
	    $scope.$on("nodeEven", function (even, msg) { 
	           console.debug("HomeController / nodeEven:" + msg);
	           $scope.$broadcast("nodeEvenForParent", msg);
	       });
        console.debug("HomeController end");
    }

    return HomeController;
});