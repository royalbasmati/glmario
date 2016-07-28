angular.module('gl.list', [])

.controller('ListCtrl', function($scope, List, $firebaseArray) {

	List.then(function(config) {
		var ref = new Firebase(config.data.databaseURL);
		var List = ref.child('list');
		$scope.list = $firebaseArray(List);
	});

	console.log($scope.list, 'list');

	$scope.add = function(item) {
		// console.log(item);
		var date = new Date();
		listItem = {
			'item': item,
			'date': date
		};
		// $scope.list.push(listItem);
		$scope.item = '';
		// console.log('list', List);
		$scope.list.$add(listItem);
	};

});
