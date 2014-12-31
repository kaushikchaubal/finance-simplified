'use strict';

angular
  .module('finance-simplified', [
    'ngRoute',
    'main',
    'categories'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/categories', {
        templateUrl: 'app/views/categories.html',
        controller: 'CategoriesCtrl'
      })
      .when('/overview', {
        templateUrl: 'app/views/overview/overview.html'
      })
      .when('/overview/purpose-and-functioning', {
        templateUrl: 'app/views/overview/purpose-and-functioning.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
