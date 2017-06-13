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
	.state('week', {
		url: '/week',
		templateUrl: '../states/week_reports/week.html',
		controller: 'weekCtrl'
	})
	.state('month', {
		url: '/month',
		templateUrl: '../states/month_reports/month.html',
		controller: 'monthCtrl'
	})
	.state('month_bar', {
		url: '/month_bar',
		templateUrl: '../states/month_bar/month_bar.html',
		controller: 'monthBarCtrl'
	})
	.state('all', {
		url: '/all',
		templateUrl: '../states/all_reports/all.html',
		controller: 'allCtrl'
	})
	
	
});
