// 声明我们的主模块  运行之前先加载我们的模块
var App = angular.module('App', ['ui.router','controllers']);


App.config(['$stateProvider',function ($stateProvider) {

	//今日一刻
	$stateProvider

	.state('today',{
		url: '/today',
		templateUrl: 'views/today.html',
    	controller: 'TodayController'
	})
	//往期内容
	.state('older',{
		url: '/older',
		templateUrl: 'views/older.html',
		controller: 'OlderController'
	})
	// 热门作者
	.state('author',{
		url: '/author',
		templateUrl: 'views/author.html',
		controller: 'AuthorController'
	})
	// 个人中心
	.state('center',{
		url: '/center',
		templateUrl: 'views/center.html'
	})
	// 栏目浏览
	.state('category',{
		url: '/category',
		templateUrl: 'views/category.html'
	})
	// 栏目列表
	.state('list',{
		url: '/list',
		// templateUrl: 'views/list.html'
	})
	// 我的喜欢
	.state('favourite',{
		url: '/favourite',
		templateUrl: 'views/favourite.html'
	})
	// shezhi
	.state('settings',{
		url: "/settings",
		templateUrl: 'views/settings.html'
	})
}])

App.run(['$rootScope', function ($rootScope, collapse) {
	// 显示加载图标
	$rootScope.loaded = false;

	// 侧边栏打开状态（未打开）
	$rootScope.collapsed = false;

	// 侧边栏索引
	$rootScope.index = 0;

	//全局方法
	$rootScope.toggle = function (index) {
		// 切换侧边栏状态
		$rootScope.collapsed = !$rootScope.collapsed;

		// 获取所有导航
		var navs = document.querySelectorAll('.navs dd');

		// 设置当前导航状态


		// 设置动国效果
		if($rootScope.collapsed) {

			for(var i=0; i<navs.length; i++) {
				navs[i].style.transitionDelay = '0.2s';
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			}

		} else {
			
			for(var i=navs.length - 1; i>=0; i--) {
				navs[i].style.transitionDelay = '';
				navs[i].style.transform = 'translate(-100%)';
				navs[i].style.transitionDuration = (navs.length - i + 1) * 0.05 + 's';
			}
		}
	}
}]);