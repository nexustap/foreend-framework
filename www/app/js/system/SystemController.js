
/* 系统管理的控制器
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-29
 * Version: $Revision$
 */

'use strict';

define([], function () {

    function SystemController($scope, $location) {
        console.debug("SystemController start");

        //2.提交到全局事件viewUrlEven
        $scope.$emit("viewUrlEven",$location.path());

        console.debug("SystemController end");
    }

    return SystemController;
});