
/* main运行程序，用于配置库和启动应用
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

require.config({
    baseUrl : 'js',
    paths : {
        //load libraries 只有当全局调用的库
      angular : '../lib/angular/angular',
      angularCookies : '../lib/angular/angular-cookies',
      text : '../lib/requirejs/text',
      jquery : '../lib/jquery/jquery-1.9.1',
      jqueryui : '../lib/jquery-ui/js/jquery-ui-1.10.3.custom',
      angularBootstrap : '../lib/angular-bootstrap/ui-bootstrap-tpls-0.6.0-custom',
      bootsrap : '../lib/bootstrap/js/bootstrap',
      dynatree : '../lib/utils/dynatree/jquery.dynatree'
    },
    
    shim:{
        'angular':{
            exports:'angular'
        },
        'angularCookies' : ['angular'],
        'angularBootstrap': ['angular'],
        'dynatree': ['jquery','jqueryui'],
    },
    
    priority:[
        'angular'
    ]
});

require([
    'angular',
    'text',
    'jquery',
    'app',
    'routes',
], function (angular) {

    //启动itspApp应用
    $(document).ready(function () {
        angular.bootstrap(document, ['itspApp']);
    });
});