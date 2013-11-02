/* index.html的内容控制器
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-28
 * Version: $Revision$
 */

'use strict';

define(['messager'], function () {

    function HomeContentController($scope, $location) {
        console.debug("HomeContentController start");
        Messenger.options = {
            extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
            theme: 'air'
        }
        //2.提交到全局事件viewUrlEven, viewUrlEven在homeController定义
        $scope.$emit("viewUrlEven", $location.path());
        console.debug("HomeContentController end");
    }

    return HomeContentController;
});