angular.module('gl.list', [])

.controller('ListCtrl', function($scope, List) {

	$scope.list = List;

	$scope.add = function(item){
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