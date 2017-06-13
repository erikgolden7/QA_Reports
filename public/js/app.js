angular.module('qaApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: '../states/home/home.html',
		controller: 'homeCtrl'
	})
	.state('day', {
		url: '/day',
		templateUrl: '../states/day_reports/day.html',
		controller: 'dayCtrl'
	})
	.state('day_bar', {
		url: '/day_bar',
		templateUrl: '../states/day_bar/day_bar.html',
		controller: 'dayBarCtrl'
	})
	.state('week', {
		url: '/week',
		templateUrl: '../states/week_reports/week.html',
		controller: 'weekCtrl'
	})
	.state('month', {
		url: '/month',
		templateUrl: '../states/month/month_line/month.html',
		controller: 'monthCtrl'
	})
	.state('month_bar', {
		url: '/month_bar',
		templateUrl: '../states/month/month_bar/month_bar.html',
		controller: 'monthBarCtrl'
	})
	.state('all', {
		url: '/all',
		templateUrl: '../states/all_reports/all.html',
		controller: 'allCtrl'
	})
	
	
});
