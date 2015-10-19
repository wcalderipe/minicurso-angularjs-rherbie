(function() {
  'use strict';

  angular
    .module('app')
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$scope'];

  function ContactController($scope) {
    $scope.message = {
      name: '',
      email: '',
      body: ''
    };

    $scope.email = '';

    $scope.submit = function() {
      if (!$scope.contactForm.$valid) {
        return alert('invalid');
      }

      alert('valid\n' + JSON.stringify($scope.message));
    };
  }
})();

