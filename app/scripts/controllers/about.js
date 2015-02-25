'use strict';

/**
 * @ngdoc function
 * @name nomwellApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nomwellApp
 */
angular.module('nomwellApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
