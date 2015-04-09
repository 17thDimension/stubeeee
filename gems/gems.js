'use strict';

angular.module('myApp.gems', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gems', {
    templateUrl: 'gems/gems.html',
    controller: 'gemsCtrl'
  });
}])

.controller('gemsCtrl', [function() {

}]);
