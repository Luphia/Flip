'use strict';

/* Controllers */
var artistaControllers = angular.module('artistaControllers', []);
artistaControllers.controller('CaseListCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./data/cases.json').success(function(data) {
		$scope.cases = data;
	});

	//$scope.orderProp = 'age';
}]);

artistaControllers.controller('CaseDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.caseId = $routeParams.caseId;
}]);