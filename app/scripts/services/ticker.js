'use strict';

/**
 * @ngdoc service
 * @name ffivApp.ticker
 * @description
 * # ticker
 * Factory in the ffivApp.
 */
angular.module('ffivApp')
  .factory('ticker', ['$http', function ($http) {
    // Public API here
    return {
      getPrice: function (symbol) {
				return $http.jsonp('http://dev.markitondemand.com/Api/v2/Quote/jsonp', {params: {'jsoncallback': 'JSON_CALLBACK', 'symbol': symbol}}).then(function(result) {
					console.log(result.data);
					if ('Message' in result.data) {
						throw result.data.Message;
					}
					return result.data.LastPrice;
				});
      }
    };
  }]);
