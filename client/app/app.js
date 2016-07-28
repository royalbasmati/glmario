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

  return function() {
    return $http({
      method: 'GET',
      url: '/api/list'
    }).then(function(config) {
      console.log(config.data, 'config');
      var ref = new Firebase(config.data.databaseURL);
      var List = ref.child('list');
      return $firebaseArray(List);
    });
  };
}]);