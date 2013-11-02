
/* 设备管理控制器
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-29
 * Version: $Revision$
 */

'use strict';

define([], function () {

    function DeviceController($scope, $location) {
        console.debug("DeviceController");

        //2.提交到全局事件viewUrlEven
        $scope.$emit("viewUrlEven",$location.path()); 
    }

    return DeviceController;
});