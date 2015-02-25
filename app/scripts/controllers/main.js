'use strict';

/**
 * @ngdoc function
 * @name nomwellApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nomwellApp
 */
angular.module('nomwellApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
