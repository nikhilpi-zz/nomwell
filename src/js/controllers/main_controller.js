angular.module('NomWell.controllers.Main', [])

.controller('MainController', function($scope, $window, $location){
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
      eta: 30,
      img: 'http://www.kraftrecipes.com/assets/recipe_images/Mediterranean-Quinoa-salad-57818.jpg',
      favorite: false,
      ingredients: ['quinoa', 'lemon', 'mint', 'squash'],
      fat: 3,
      calories: 300,
      salt: 3,
      vegetarian: false,
      glutenFree: true,
      style: 'Japanese'
    },
    {
      name: 'Caprese Pasta',
      description: 'Healthy Food',
      price: 12,
      vendor: 'Bravo',
      eta: 35,
      img: 'http://www.ilovepasta.org/sites/default/files/feature-bg-imgs/pasta-slide-001_0.jpg',
      favorite: false,
      ingredients: ['tomato', 'basil', 'farfalle', 'spinach'],
      fat: 4,
      calories: 500,
      salt: 2,
      vegetarian: true,
      glutenFree: false,
      style: 'Italian'
    },
    {
      name: 'Grilled Tilapia',
      description: 'Healthy Food',
      price: 13,
      vendor: 'Lyfe Kitchen',
      eta: 30,
      img: 'http://www.muscleprodigy.com/content/articles/home/feb-12-2011-meal-plan-of-the-day-1344.jpg',
      favorite: false,
      ingredients: ['tilapia', 'green beans', 'tomato', 'onions'],
      fat: 3,
      calories: 300,
      salt: 3,
      vegetarian: false,
      glutenFree: true,
      style: 'Italian'
    },
    {
      name: 'Lettuce Wraps',
      description: 'Healthy Food',
      price: 8,
      vendor: 'Thai Sookdee',
      eta: 25,
      img: 'http://assets.cakebatterandbowl.com/wp-content/uploads/2013/03/wraps2.jpg',
      favorite: false,
      ingredients: ['lettuce', 'edamame', 'carrots', 'celery'],
      fat: 1,
      calories: 400,
      salt: 3,
      vegetarian: true,
      glutenFree: true,
      style: 'Thai'
    }
  ];

  $scope.styles = [
    {
      name: 'All',
      url: 'img/all.jpg',
      selected: false
    },
    {
      name: 'Thai',
      url: 'img/thai.jpg',
      selected: false
    },
    {
      name: 'Indian',
      url: 'img/indian.jpg',
      selected: false
    },
    {
      name: 'Italian',
      url: 'img/mediterranean.jpg',
      selected: false
    },
    {
      name: 'Japanese',
      url: 'img/japanese.jpg',
      selected: false
    },
    {
      name: 'Korean',
      url: 'img/korean.jpg',
      selected: false
    }
  ];

  $scope.filter ={
    vegetarian: false,
    glutenFree: false,
    calories: 500
  };

  function filterhome(food, i){
    console.log($scope.filter);
    var styles = [];
    for(var i = 0; i < $scope.styles.length; i++){
      if($scope.styles[i].selected){
        styles.push($scope.styles[i].name);
      }
    }
    console.log(styles);
    if(styles.indexOf(food.style) !== -1 && food.calories <= parseInt($scope.filter.calories)){
      return true;      
    } else {
      return false;
    }
  };

  function filterFavorite(food, i){
    return food.favorite;
  };

  $scope.resultFilter = filterhome;

  $scope.changeResults = function(page){
    switch(page) {
      case 'fav':
        $scope.resultFilter = filterFavorite;
        break;
      default:
        $scope.resultFilter = filterhome;
        break;
    }
    $location.path('/results');
  };



  $scope.toggle = function(style) {
    if(style.name == 'All' && !style.selected){
      for(var i = 0; i < $scope.styles.length; i++){
        $scope.styles[i].selected = true;
      }
    } else if  (style.name == 'All' && style.selected){
      for(var i = 0; i < $scope.styles.length; i++){
        $scope.styles[i].selected = false;
      }
    } else {
      style.selected = !style.selected;
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

  $scope.timeSpent = 0;
  $scope.timer = null;

  function startTimer(){
    $scope.timer = setInterval( function(){ 
      $scope.timeSpent++ ;
      var secondsLeft = ($scope.selectedFood.eta * 60) - $scope.timeSpent;
      var minutes = Math.floor(secondsLeft / 60);
      document.querySelector("#time-left").innerText = minutes + ":" + (secondsLeft - (minutes * 60)) ;
    }, 1000); 
  };

  clearInterval($scope.timer); 
  console.log($location.path());
  $scope.$on('$routeChangeStart', function(next, current) {
    if($location.path() == '/confirmation'){
      startTimer();
    } else {
      clearInterval($scope.timer);
    }
  });
  
  

});
