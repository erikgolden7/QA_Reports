angular.module('qaApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/login');
	
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: './index.html',
		controller: 'homeCtrl'
	})
	.state('day', {
		url: '/day',
		templateUrl: '../states/all_reports/day.html',
		controller: 'dayCtrl'
	})
	.state('week', {
		url: '/week',
		templateUrl: '../states/all_reports/week.html',
		controller: 'weekCtrl'
	})
	.state('month', {
		url: '/month',
		templateUrl: '../states/all_reports/month.html',
		controller: 'monthCtrl'
	})
	.state('all', {
		url: '/all',
		templateUrl: '../states/all_reports/all.html',
		controller: 'allCtrl'
	})
	
});
