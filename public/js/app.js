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
		templateUrl: '../states/day/day_line/day.html',
		controller: 'dayCtrl'
	})
	.state('day_bar', {
		url: '/day_bar',
		templateUrl: '../states/day/day_bar/day_bar.html',
		controller: 'dayBarCtrl'
	})
	.state('week', {
		url: '/week',
		templateUrl: '../states/week/week_line/week.html',
		controller: 'weekCtrl'
	})
	.state('week_bar', {
		url: '/week_bar',
		templateUrl: '../states/week/week_bar/week_bar.html',
		controller: 'weekBarCtrl'
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
		templateUrl: '../states/all/all_line/all.html',
		controller: 'allCtrl'
	})
	.state('all_bar', {
		url: '/all_bar',
		templateUrl: '../states/all/all_bar/all_bar.html',
		controller: 'allBarCtrl'
	})
	
});
