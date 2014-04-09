'use strict';

/* App Module */
var artistarApp = angular.module('artistarApp', [
	'ngRoute',
	'artistarControllers'
]);

artistarApp.config(['$routeProvider', function($routeProvider) {
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