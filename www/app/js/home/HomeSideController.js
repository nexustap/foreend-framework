
/* index.html的左边边栏导航的控制器
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-28
 * Version: $Revision$
 */


define([], function () {

    function HomeSideController($scope) {
        console.debug("HomeSideController start");

        //响应viewUrlEvenForParent广播事件
		$scope.$on("viewUrlEvenForParent", function (even, msg) { 
		        console.debug("HomeSideController / viewUrlEvenForParent:" + msg);
		});
        console.debug("HomeSideController end");
    }

    return HomeSideController;
});
