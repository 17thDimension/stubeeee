'use strict';

angular.module('myApp.gems', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gems', {
    templateUrl: 'gems/gems.html?version=0.0.0',
    controller: 'gemsCtrl'
  });
}])

.controller('gemsCtrl', [function() {

}]);
