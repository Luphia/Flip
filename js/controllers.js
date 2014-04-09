'use strict';

/* Controllers */
var artistarControllers = angular.module('artistarControllers', []);
artistarControllers.controller('CaseListCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./data/cases.json').success(function(data) {
		$scope.cases = data;
	});

	//$scope.orderProp = 'age';
}]);

artistarControllers.controller('CaseDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.caseId = $routeParams.caseId;
}]);