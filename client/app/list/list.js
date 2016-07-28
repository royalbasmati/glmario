angular.module('gl.list', [])

.controller('ListCtrl', function($scope, List) {

	$scope.list = List.then(function(config) {
		console.log(config.data, 'config');
		var ref = new Firebase(config.data.databaseURL);
		var List = ref.child('list');
		return $firebaseArray(List);
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

	// $scope.remove = function($index){
	// 	console.log($index);
	// 	List.set(null);
	// };
})
