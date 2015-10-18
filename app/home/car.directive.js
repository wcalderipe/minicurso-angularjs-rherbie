(function() {
  'use strict';

  angular
    .module('app')
    .directive('car', car);

  car.$inject = [];

  function car() {
    var directive = {
        link: link,
        restrict: 'EA',
        templateUrl: 'app/home/car.tmpl.html'
    };

    return directive;

    function link(scope, element, attrs) {
      
    }
  };
})();

