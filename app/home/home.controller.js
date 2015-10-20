(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$filter', 'CarsFactory'];

  function HomeController($scope, $filter, CarsFactory) {
    var orderBy = $filter('orderBy');

    $scope.cars = CarsFactory.getCars();

    $scope.sortPredicate = '';

    $scope.sortCars = function() {
      $scope.cars = orderBy($scope.cars, $scope.sortPredicate);
    };
  }
})();

