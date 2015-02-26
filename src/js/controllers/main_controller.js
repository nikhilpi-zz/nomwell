angular.module('NomWell.controllers.Main', [])

.controller('MainController', function($scope){
  $scope.user = {

  };
  $scope.foods = [
    {
      name: 'Quinoa',
      description: 'Healthy Food'
    },
    {
      name: 'Kale',
      description: 'Kale me'
    }
  ];


});