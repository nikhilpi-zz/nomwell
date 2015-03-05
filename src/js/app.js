angular.module('NomWell', [
  'ngRoute',
  'mobile-angular-ui',
  'NomWell.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'home.html',  
      reloadOnSearch: false}
    )
    .when('/results', {
      templateUrl:'results.html',  
      reloadOnSearch: false}
    )
    .when('/order', {
      templateUrl:'order.html',
      reloadOnSearch: false
    })
    .when('/confirmation', {
      templateUrl: 'confirmation.html',
      reloadOnSearch: false
    })
    .when('/account', {
      templateUrl: 'account.html',
      reloadOnSearch: false
    });
});