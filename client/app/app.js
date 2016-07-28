angular.module('gl', ['gl.list', 'ngRoute', 'firebase'])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/list', {
      templateUrl: 'app/list/list.html',
      controller: 'ListCtrl'
    })
    .otherwise('/list');
})
.service('List', ['$firebaseArray', '$http', function($firebaseArray, $http) {

  return {
    getList: $http({
      method: 'GET',
      url: '/api/list'
    }).then(function(config) {
      var ref = new Firebase(config.databaseURL);
      var List = ref.child('list');
      return $firebaseArray(List);
    })
  };
}]);