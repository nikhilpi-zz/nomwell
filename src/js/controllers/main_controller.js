angular.module('NomWell.controllers.Main', [])

.controller('MainController', function($scope, $window){
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

  $scope.history = [];

  $scope.goBack = function(){    
    console.log('back');   
    $window.history.back();
  };


});