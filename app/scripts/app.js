'use strict';

/**
 * @ngdoc overview
 * @name ffivApp
 * @description
 * # ffivApp
 *
 * Main module of the application.
 */
angular
  .module('ffivApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
