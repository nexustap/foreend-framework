
/*
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

    var tabs = [];
    var routeParam = '/tabs';
    var routeParam_frame = '/tabs/frame';

    function HomeTabsController($scope, $route, $routeParams, $location, $sce) {
        console.debug("HomeTabsController");
        console.debug($routeParams);

        $scope.tabs = createTab();
        $scope.tabCloseMsg = '';

        /*=========================================
         * 警告设置
         =========================================*/

        $scope.alerts = [];

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };


        /*=========================================
         * 标签页
         =========================================*/

        function tabHomeActive() {
          console.debug("HomeTabsController / tabHomeActive");

          if (tabs.length == 0) {
            return true;
          } else {
            return false;
          }
        }

        //创建tab
        function createTab() {
          console.debug("HomeTabsController / createTab");

          //获取标题
          var title = $routeParams.title
          
          //获取路径
          var path = $routeParams.path;

          //检查参数
          if (title == null || path == null) {
            return tabs;
          };

          //检查标签页是否重复打开
          var isExist = false;
          for (var i = 0; i < tabs.length; i++) {
            
            if (tabs[i].path == path) {
              tabs[i].active = true;
              isExist = true;
            } else{
              tabs[i].active = false;
            }
          };
          if (isExist) {
            return tabs;
          };

          //检查标签页的数量
          if (tabs.length > 19) {
            $scope.alerts.push({type: 'warning', msg: "只允许同时打开" + tabs.length + "个标签页!"});
            return tabs;
          };


          //获取网页显示类型属性
          var type = 'include';
          if ($location.path().indexOf(routeParam_frame) == 0) {
            type = 'frame';
          }

          //创建当前的tab
          var currentTab = {
              id:tabs.length, 
              title:title, 
              type:type, 
              path:$sce.trustAsResourceUrl(path), 
              active: true};  
          // console.debug(currentTab);
          tabs.push(currentTab);

          return tabs;
        };

        $scope.closeMe = function(index) {
          console.debug('HomeTabsController / closeMe');
          console.debug(tabs[index]);

          $scope.tabCloseMsg = tabs[index].title ;
          tabs.splice(index, 1);
          
          for (var i = 0; i < tabs.length; i++) {
            tabs[i].id = i;
            tabs[i].active = false;
          };

          //激活上一个标签页
          if (index > 0) {
            tabs[index-1].active = true;
          } else {
            $scope.tabHomeActive = tabHomeActive();
          }

          console.debug(tabs);
          $scope.tabs = tabs;
        }

        $scope.clickMe = function(index) {
          console.debug('HomeTabsController / clickMe');
          console.debug(index);

          $scope.tabCloseMsg = "";
        }
        
        $scope.tabHomeActive = tabHomeActive();
        $scope.$apply();
    }

    return HomeTabsController;
});