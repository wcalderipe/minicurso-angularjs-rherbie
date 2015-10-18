(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope) {
    $scope.cars = [
      {
        "id": 1,
        "model": "Lorem ipsum dolor",
        "brand": "Ford",
        "year": 2015,
        "currency": "R$",
        "value": 34500,
        "seller": "Revenda Herbie",
        "cover_image": "images/demo1.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nostrum adipisci ipsam dolore ullam aperiam autem nesciunt soluta. Rerum illo facilis accusantium quis ducimus earum cumque provident porro nihil quo.",
      },
      {
        "id": 2,
        "model": "Lorem ipsum dolor",
        "brand": "Ford",
        "year": 2015,
        "currency": "R$",
        "value": 34500,
        "seller": "Revenda Herbie",
        "cover_image": "images/demo1.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nostrum adipisci ipsam dolore ullam aperiam autem nesciunt soluta. Rerum illo facilis accusantium quis ducimus earum cumque provident porro nihil quo.",
      },
      {
        "id": 3,
        "model": "Lorem ipsum dolor",
        "brand": "Ford",
        "year": 2015,
        "currency": "R$",
        "value": 34500,
        "seller": "Revenda Herbie",
        "cover_image": "images/demo1.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nostrum adipisci ipsam dolore ullam aperiam autem nesciunt soluta. Rerum illo facilis accusantium quis ducimus earum cumque provident porro nihil quo.",
      },
      {
        "id": 4,
        "model": "Lorem ipsum dolor",
        "brand": "Ford",
        "year": 2015,
        "currency": "R$",
        "value": 34500,
        "seller": "Revenda Herbie",
        "cover_image": "images/demo1.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nostrum adipisci ipsam dolore ullam aperiam autem nesciunt soluta. Rerum illo facilis accusantium quis ducimus earum cumque provident porro nihil quo.",
      }
    ];
  }
})();
