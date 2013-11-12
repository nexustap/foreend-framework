Overview
===========================

## 1. 工程目录结构

```
app_src/              --> 应用程序所有的原始文件
	css/                --> css文件
		common.css        --> 缺省自定义的css样式

	data/               --> json数据文件

	views/                  --> html类型的视图文件
		[application]/        --> 自定义的应用目录
				[module]/         --> 自定义的模块名称
					res/            --> 当前模块所需要的html模板构成元素
					[module].html   --> 自定义的模块html页面

	images/             --> 所有的图片文件

	js/                 --> javascript文件
		directives/       --> 指令集合
		[application]/    --> 自定义的应用目录
				[xxx]/        --> 自定义的模块名称。xxx代表某个模块或者子模块的名称
					xxxController.js    -->自定义模块的controller。xxx代表某个模块或者子模块的名称
					xxxModel.js         -->自定义模块的业务模型。xxx代表某个模块或者子模块的名称

		app.js          --> 应用程序顶层设置
		filters.js      --> 自定义的过滤器
		services.js     --> 自定义的服务

	lib/              --> 第三方库文件
			angular/
			bootstrap/
			jquery/
			jquery-ui/
			require/
			utils/                --> 其他第三方控件
				ailk-sdk/           --> 亚信联创自定义或引用第三方库的开发库
					css/              --> 亚信联创自定义的开发库的CSS样式存放
					assets/           --> 亚信联创自定义的开发科的其他元素的存放
					src/              --> 亚信联创自定义的开发库源码，一个功能一个文件
						ailk.date.js      --> 日期控件，依赖。"ailk."作为前缀
					ailk-sdk.js         --> 使用grunt合并过后的js文件，
				dynatree/           --> 动态树
				jqGrid/             --> 表格控件
				jquery.cookie.js    --> cookie控件，dyntree使用。工程内程序请勿使用，改用angular.cookie。
				jquery.sprintf.js   --> javascript上的sprintf功能，用于输出指定的文本内容。

	res/              --> index.html模板构成元素

	index.html              --> 最顶层的HTML模板文件的应用程序

app/  -->使用grunt合并、压缩后的用于发布的应用程序。目录结构

test/ -->单元测试目录
```

## 2. 文件命名作用

- html、js、css的文件名必须是用英文表达其所目标功能的有意义的名称。不能使用拼音或者无意义的数字和字母组成。
- js代码分为二类
	- controller: 用于界面与后端业务逻辑的数据交互。应当
	- model: 用于业务逻辑的实现

## 3. 网页结构

- 除控制网页效果的js代码之外，网页不应该存在其他的js引用
- 网页结构说明：
```
	<!DOCTYPE html> 
	<html ng-app>
	<header>
		<meta charset="utf-8">
		<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height"/>
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="Cache-Control"  content="no-cache, must-revalidate">
		<meta http-equiv="expires"  content="Wed, 26 Feb 1997 08:21:57 GMT">
		<title app-desc="name">loading...</title>

		<!-- Loading Bootstrap -->
		<link href="lib/bootstrap/css/bootstrap.css" rel="stylesheet">

		<!-- custom style css -->
		<link rel='stylesheet'  type='text/css' href='lib/utils/dynatree/skin-vista/ui.dynatree.css'>
		<link rel='stylesheet'  href="lib/jquery-ui/css/ui-lightness/jquery-ui-1.10.3.custom.css"/>
		<link rel='shortcut icon' href="images/favicon.ico">
		<link rel='stylesheet'  type='text/css' href='css/common.css'>
		
		<!-- html代码 -->
	</header>
	<body>
		<!-- html代码 -->
		
		<!-- 当前页面所需的界面控制的js代码 开始-->
		<script type="text/javascript">
			<!-- js代码 -->
		</script>
		<!-- 当前页面所需的界面控制的js代码 结束-->

		<script type="text/javascript" data-main="js/main" src="lib/requirejs/require.js"></script>
	</body>
	</html>
``` 

## 4. js程序结构

- 文件名必须与类名一一对应。如文件名是:xxxController、文件中的类名必须也是xxxController
- 一个controller文件必须要定义相应一个model文件，以保证controller按原本页面部署的顺序执行。
	由于requirejs的动态加载机制，会提前导入有包含其他js文件的模块，再导入不包含js文件的模块文件。这样会导致不同js文件的模块执行顺序发生变化。
- framework是整个框架的控制代码，请谨慎修改。
- 虽然系统可以实现一个页面多个controller，但应该尽量保持一个controller。只有在不得不需要的情况下，才可以使用多个controller。
- 第三方库的设置应当放到main.js下。引用时，应当考虑三个因数：
	- 引用的第三方库不应雷同或近似现有的库。现有的库通过相互组合实现的功能，也应尽量不要增加引用第三方库。
	- 引用的第三方库应当优先考虑满足requirejs的规范。
	- 引用的第三方库如果不能满足requirejs。可以放到shim下配置。配置方法参考requirejs的[官方文档](http://www.requirejs.org/docs/api.html#config-shim)。

## 5. 公共库和第三方库文件规定

- 所有公共库和第三方库文件都放在lib目录下， 并按上述目录结构部署。
- 对于界面UI实现:
	- 第一选择采用angular-ui或angular+bootstrap
	- 第二选择采用JQueryUI。
	- 任何第三方库实现必须保证与boostrap、angular兼容。除非特殊情况下，基本的控件用angular是完全满足的。
- 所有程序调用的第三方控件除angularjs、bootstrap、requirejs，其他不能直接暴露到程序代码里使用。
- 对于控件库应按类型或功能单独在ailk-sdk/src目录写一个js文件。而不能书写到ailk.sdk.js。
- ailk.sdk.js被工程全局共享调用，由grunt合并src目录下所有js文件获得。
- 禁止使用showDaillog、windows.open、confirm、alert等任何windows对象所提供的所有界面UI组件。
