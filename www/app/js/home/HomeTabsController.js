
/*
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

    var tabs = [];
    var routeParam = '#/tabs/';
    var routeParam_frame = '#/tabs/frame/';

    function HomeTabsController($scope, $routeParams, $location) {
        console.debug("HomeTabsController");
        console.debug($routeParams);

        /*=========================================
         * 警告设置
         =========================================*/

        $scope.alerts = [];

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        /*=========================================
         * 广播事件设置
         =========================================*/

        //提交到全局事件viewUrlEven, viewUrlEven在homeController定义
        $scope.$emit("viewUrlEven",$location.path());

        //响应nodeEvenForParent广播事件
        $scope.$on("nodeEvenForParent", function (even, node) {
              console.debug("HomeTabsController / nodeEvenForParent:" + node);
              
              createTab(node);  //插入当前tab
        });

        /*=========================================
         * 标签页
         =========================================*/

        //创建tab
        var createTab = function(node) {
          console.debug("HomeTabsController / createTab");

          if (tabs.length > 19) {//检查标签页的数量
            $scope.alerts.push({type: 'warning', msg: "只允许同时打开" + tabs.length + "个标签页!"});
            return;
          };

          //获取模块路径
          var path = node.data.href;
          path = path.replace(routeParam_frame, '');
          path = path.replace(routeParam, '');

          for (var i in tabs) {//检查标签页是否重复打开
            if (tabs[i].path == path) {
                tabs[i].active = true;
                return;
            }
          };

          //创建当前的tab
          var currentTab = {id:tabs.length,title: node.data.title, href: node.data.href, path: path};  
          console.debug(currentTab);

          //tab页添加属性
          var type = 'include';
          if (currentTab.href.indexOf(routeParam_frame) == 0) {
            type = 'frame';
          }
          currentTab.type = type;

          //tab添加url
          var directories = currentTab.path.split('.');
          var url ='';
          for (var i = 0; i < directories.length; i++) {
            url += directories[i] + '/';
          };
          url += directories[i-1] + '.html';
          currentTab.url = url;

          tabs.push(currentTab);
          console.debug(currentTab);
        };

        var activeTab = function() {
          console.debug("HomeTabsController / activeTab");

          for (var i in tabs) {//激活
            if (tabs[i].path == $routeParams.path) {
                tabs[i].active = true;
                break;
            }
          };

          return tabs;
        }

        $scope.closeMe = function(id) {
          console.debug('HomeTabsController / closeMe');
          tabs.pop(tabs[id]);

          console.debug(tabs);
          $scope.tabs = tabs;
          $scope.$apply();
        }

        $scope.tabs = activeTab();
        console.debug(tabs);
        $scope.$apply();
    }

    return HomeTabsController;
});