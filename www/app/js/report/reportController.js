/* 报表管理控制器
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: lordking
 * Copyright: 2013-10-22
 * Version: $Revision$
 */

'use strict';

define([], function () {

    function ReportController($scope, $location) {
        console.debug("ReportController");

        //2.提交到全局事件viewUrlEven
        $scope.$emit("viewUrlEven",$location.path()); 
    }

    return ReportController;
});