
/* index.html的左边边栏导航的控制器
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-28
 * Version: $Revision$
 */

'use strict';

define(['home/HomeModel'], function (HomeModel) {

    function HomeSideController($scope, $location, $http, $routeParams) {
        console.debug("HomeSideController");

        var model = new HomeModel($http);
        $scope.menus = model.queryMenu();

        $scope.$apply();
    }

    return HomeSideController;
});
