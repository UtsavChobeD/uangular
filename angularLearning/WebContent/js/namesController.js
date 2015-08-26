angular.module('myApp', []).controller(
		'namesCtrl',
		function($scope, $http) {
			/*$scope.names = [ {
				name : 'Jani',
				country : 'Norway'
			}, {
				name : 'Hege',
				country : 'Sweden'
			}, {
				name : 'Kai',
				country : 'Denmark'
			} ];*/

			$http.get("http://www.w3schools.com/angular/customers.php")
					.success(function(response) {
						$scope.names = response.records;
					});

			$scope.count = 0;
			$scope.alert = function() {
				this.alert("hello");
				count++;
				alert(this.count);
			}
		});