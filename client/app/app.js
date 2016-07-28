angular.module('gl', ['gl.list', 'ngRoute', 'firebase'])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/list', {
      templateUrl: 'app/list/list.html',
      controller: 'ListCtrl'
    })
    .otherwise('/list')
})
.factory("List", ["$firebaseArray",
  function($firebaseArray) {

	//connect to db
    var config = {
      apiKey: process.env.APIKEY,
      authDomain: process.env.AUTHDOMAIN,
      databaseURL: process.env.DBURL,
      storageBucket: process.env.STORAGEBUCKET
    };
	// firebase.initializeApp(config);
	// var db = firebase.database();
	// var ref = db.ref("/");
	// console.log(List, 'list');
	var ref = new Firebase(config.databaseURL);
	var List = ref.child('list');

    return $firebaseArray(List);
  }
])