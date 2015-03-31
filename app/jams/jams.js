'use strict';

angular.module('myApp.jams', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jams', {
    templateUrl: 'jams/jams.html',
    controller: 'JamsCtrl'
  });
}])

.controller('JamsCtrl', [function() {

}]);
