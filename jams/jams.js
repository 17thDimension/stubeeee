'use strict';

angular.module('myApp.jams', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jams', {
    templateUrl: 'jams/jams.html?version=0.0.0',
    controller: 'JamsCtrl'
  });
}])

.controller('JamsCtrl', [function() {

}]);
