'use strict';

/**
 * @ngdoc function
 * @name ffivApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ffivApp
 */
angular.module('ffivApp')
  .controller('MainCtrl', ['$scope', 'ticker', function ($scope, ticker) {
		$scope.symbol = 'FFIV';
		$scope.price = 'loading...';
		$scope.lookup = function(symbol) {
			ticker.getPrice(symbol).then(function(data) {
				$scope.price = data;
			}, function(error) {
				$scope.price = error;
			});
		};

		$scope.lookup($scope.symbol);
  }]);
