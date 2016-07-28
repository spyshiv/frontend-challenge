var app = angular.module("TrendApp", []);

app.controller('TrendCtrl',['$scope', '$http',function ($scope, $http) {

	$http({
        method : "GET",
        url : "countries/"
    }).then(function trendSuccess(response) {
    	
    	$scope.countries = response.data.countries;

    }, function trendError(response) {
        
        console.log("Something went wrong!");
    });

    $scope.FirstCountry = function(countryname){
    	console.log(countryname);
    }
    $scope.SecondCountry = function(countryname){
    	console.log(countryname);
    }

}]);