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
        .when('/contact', {
          templateUrl: 'app/contact/contact.tmpl.html',
          controller: 'ContactController'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }]);
})();
