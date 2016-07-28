var app = angular.module("TrendApp", []);

app.controller('TrendCtrl', ['$scope', '$http', function ($scope, $http) {

	$http({
        method : "GET",
        url : "countries/"
    }).then(function trendSuccess(response) {
    	
    	$scope.countries = response.data.countries;

    }, function trendError(response) {
        
        console.log("Could not get country list!");
    
    });

    $scope.FirstCountry = function(countryname) {
    	
    	$http({
	        method : "GET",
	        url : "countries/" + countryname + "/trends/"
	    }).then(function trendSuccess(response) {
	    	
	    	$scope.firstctrends = response.data.trends;
	    	$scope.commontrends = $scope.firstctrends;
	    	$scope.commonTrends();

	    }, function trendError(response) {
	        console.log("Could not get trends of first country!");
	    });
    }

    $scope.SecondCountry = function(countryname) {
    	
    	$http({
	        method : "GET",
	        url : "countries/" + countryname + "/trends/"
	    }).then(function trendSuccess(response) {
	    	
	    	$scope.secondctrends = response.data.trends;
	    	$scope.commontrends = $scope.secondctrends;
	    	$scope.commonTrends();

	    }, function trendError(response) {
	        console.log("Could not get trends of second country!");
	    });


    }

    $scope.commonTrends = function() {
		if($scope.firstctrends && $scope.secondctrends) {
			$scope.commontrends = $scope.getIntersection($scope.firstctrends, $scope.secondctrends);
		}
    }

    $scope.getIntersection = function(firstctrends, secondctrends) {
	    commontrends = [];
	    angular.forEach(firstctrends, function(object1, index1) {
	        angular.forEach(secondctrends, function(object2, index2) {
	            if(object1.name == object2.name){
	                commontrends.push(object2);
	            }
			})
		})
		return commontrends;
	}
}]);