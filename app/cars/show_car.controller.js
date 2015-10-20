(function() {
  'use strict';

  angular
    .module('app')
    .controller('ShowCarController', ShowCarController);

  ShowCarController.$inject = ['$scope', '$routeParams', 'CarsFactory'];

  function ShowCarController($scope, $routeParams, CarsFactory) {
    $scope.car = CarsFactory.getCar($routeParams.carId);
  }
})();

