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
	  apiKey: "AIzaSyD2Mhdg1YKT1WvUUGzJgQm_JklUKGF1nDg",
	  authDomain: "project-3889533569816587013.firebaseapp.com",
	  databaseURL: "https://project-3889533569816587013.firebaseio.com",
	  storageBucket: "project-3889533569816587013.appspot.com",
	};
	// firebase.initializeApp(config);
	// var db = firebase.database();
	// var ref = db.ref("/");
	// console.log(List, 'list');
	var ref = new Firebase("https://project-3889533569816587013.firebaseio.com");
	var List = ref.child('list');

    return $firebaseArray(List);
  }
])