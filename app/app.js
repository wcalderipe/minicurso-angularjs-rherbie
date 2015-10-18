(function() {
  'use strict';

  angular
    .module('app', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'app/home/home.tmpl.html',
          controller: 'HomeController'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }]);
})();
