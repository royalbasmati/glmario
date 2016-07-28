angular.module('gl', ['gl.list', 'ngRoute', 'firebase'])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/list', {
      templateUrl: 'app/list/list.html',
      controller: 'ListCtrl'
    })
    .otherwise('/list');
})
.factory('List', ['$firebaseArray', '$http', function($firebaseArray, $http) {
  // get firebase config from server
  return $http({
    method: 'GET',
    url: '/api/list'
  });
  
}]);