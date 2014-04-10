'use strict';

/* App Module */
var artistaApp = angular.module('artistaApp', [
	'ngRoute',
	'artistaControllers'
]);

artistaApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/cases', {
		templateUrl: 'widgets/case-list/template.html',
		controller: 'CaseListCtrl'
	}).
	when('/cases/:caseId', {
		templateUrl: 'widgets/case-detail/template.html',
		controller: 'CaseDetailCtrl'
	}).
	otherwise({
		redirectTo: '/cases'
	});
}]);