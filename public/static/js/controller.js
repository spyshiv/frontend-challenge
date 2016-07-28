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

		var commontrends = $scope.commontrends;

		var totaltrendwidth = 0;
		angular.forEach(commontrends, function(object, index){
			totaltrendwidth += object.name.length;
		});

		$scope.piedata = [];
		angular.forEach(commontrends, function(object, index){
			var obj = {};
			obj.trendname = object.name;
			obj.trendlength = (object.name.length/totaltrendwidth)*100;
			$scope.piedata.push(obj);
		});

		$scope.piechart($scope.piedata);

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

	$scope.piechart = function(data){
		
		d3.select("svg").remove();
		$scope.colors = [];
		var width = 450,
		    height = 300,
		    radius = Math.min(width, height) / 2;

		var color = d3.scale.category10();

		var arc = d3.svg.arc()
		    .outerRadius(radius - 100)
		    .innerRadius(radius - 10);

		var pie = d3.layout.pie()
		    .sort(null)
		    .value(function(d) { return d.trendlength; });

		var svg = d3.select("#pie-chart").append("svg")
		    .attr("width", width)
		    .attr("height", height)
		  	.append("g")
		    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var g = svg.selectAll(".arc")
		    .data(pie(data))
		    .enter().append("g")
		    .attr("class", "arc");

	  	g.append("path")
	      	.attr("d", arc)
	      	.style("fill", function(d) { 
	      		$scope.colors.push(color(d.data.trendname));
	      		return color(d.data.trendname); });

	  	g.append("text")
	      	.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      	.attr("dy", ".35em")
	      	.text(function(d) { return d.data.trendlength; });

		function type(d) {
		  	d.trendlength = +d.trendlength;
		  	return d;
		}


	}

	

}]);