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

  $scope.styles = [
    {
      name: 'All',
      url: 'img/all.jpg',
      select: '0.3em solid white'
    },
    {
      name: 'Thai',
      url: 'img/thai.jpg',
      select: '0.3em solid white'
    },
    {
      name: 'Indian',
      url: 'img/indian.jpg',
      select: '0.3em solid white'
    },
    {
      name: 'Mediterranean',
      url: 'img/mediterranean.jpg',
      select: '0.3em solid white'
    },
    {
      name: 'Vegetarian',
      url: 'img/vegetarian.jpg',
      select: '0.3em solid white'
    },
    {
      name: 'Japanese',
      url: 'img/japanese.jpg',
      select: '0.3em solid white'
    },
    {
      name: 'Korean',
      url: 'img/korean.jpg',
      select: '0.3em solid white'
    }
  ];

  $scope.calories = 500;

  $scope.toggle = function(index) {
    if (index == 0) {
      var border = $scope.styles[0].select;
      for (var i=0; i < $scope.styles.length; i++) {
        if (border == '0.3em solid white') {
          $scope.styles[i].select = '0.3em solid #FF5050';
        } else {
          $scope.styles[i].select = '0.3em solid white';
        }
      }
    } else {
      if ($scope.styles[index].select == '0.3em solid white') {
        $scope.styles[index].select = '0.3em solid #FF5050';
      } else {
        $scope.styles[index].select = '0.3em solid white';
        $scope.styles[0].select = '0.3em solid white';
      }
    }
  }


});

