angular.module('NomWell', [
  'ngRoute',
  'mobile-angular-ui',
  'NomWell.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});