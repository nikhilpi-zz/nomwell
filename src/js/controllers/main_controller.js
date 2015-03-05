angular.module('NomWell.controllers.Main', [])

.controller('MainController', function($scope, $window){
  $scope.selected = 'visa';

  $scope.user = {
    name: 'Michael Horn',
    zipCode: '60201',
    cardNumber: '**** **** **** 1234',
    cvvCode: '***',
    expMonth: 'June',
    expYear: '2017'
  };

  $scope.foods = [
    {
      name: 'Quinoa Salad',
      description: 'Healthy Food',
      price: 10,
      vendor: 'Lyfe Kitchen',
      eta: '30',
      img: 'http://www.kraftrecipes.com/assets/recipe_images/Mediterranean-Quinoa-salad-57818.jpg',
      favorite: false,
      ingredients: ['quinoa', 'lemon', 'mint', 'squash'],
      fat: 3,
      calories: 300,
      salt: 3,
      vegetarian: false,
      thai: false,
      italian: false
    },
    {
      name: 'Caprese Pasta',
      description: 'Healthy Food',
      price: 12,
      vendor: 'Bravo',
      eta: '35',
      img: 'http://www.ilovepasta.org/sites/default/files/feature-bg-imgs/pasta-slide-001_0.jpg',
      favorite: false,
      ingredients: ['tomato', 'basil', 'farfalle', 'spinach'],
      fat: 4,
      calories: 500,
      salt: 2,
      vegetarian: true,
      thai: false,
      italian: true
    },
    {
      name: 'Grilled Tilapia',
      description: 'Healthy Food',
      price: 13,
      vendor: 'Lyfe Kitchen',
      eta: '30',
      img: 'http://www.muscleprodigy.com/content/articles/home/feb-12-2011-meal-plan-of-the-day-1344.jpg',
      favorite: false,
      ingredients: ['tilapia', 'green beans', 'tomato', 'onions'],
      fat: 3,
      calories: 300,
      salt: 3,
      vegetarian: false,
      thai: false,
      italian: true
    },
    {
      name: 'Lettuce Wraps',
      description: 'Healthy Food',
      price: 8,
      vendor: 'Thai Sookdee',
      eta: '25',
      img: 'http://assets.cakebatterandbowl.com/wp-content/uploads/2013/03/wraps2.jpg',
      favorite: false,
      ingredients: ['lettuce', 'edamame', 'carrots', 'celery'],
      fat: 1,
      calories: 400,
      salt: 3,
      vegetarian: true,
      thai: true,
      italian: false
    }
  ];

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
  };

  $scope.selectedFood = null;

  $scope.select = function(food){
    if ($scope.selectedFood !== food){
      $scope.selectedFood = food;
    } else {
      $scope.selectedFood = null;
    }
  };

  


});
