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
		formatPercent = d3.format(",.1%");
		var svg = d3.select("#pie-chart")
  					.append("svg")
  					.append("g")

		svg.append("g")
  			.attr("class", "slices");
		svg.append("g")
  			.attr("class", "labels");
		svg.append("g")
  			.attr("class", "lines");

		var width = 400,
    		height = 300,
  			radius = Math.min(width, height) / 2;

		var pie = d3.layout.pie()
  					.sort(null)
  					.value(function(d) {
    					return d.trendlength;
  					});

		var arc = d3.svg.arc()
  					.outerRadius(radius * 0.8)
  					.innerRadius(radius * 0.4);

		var outerArc = d3.svg.arc()
  					.innerRadius(radius * 0.9)
  					.outerRadius(radius * 0.9);

		svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var color = d3.scale.category10();
		console.log(color);

		var key = function(d){ return formatPercent(d.data.trendlength); };
  
  		/* ------- PIE SLICES -------*/

  		var slice = svg.select(".slices").selectAll("path.slice")
    					.data(pie(data), key);

  		slice.enter()
    		.insert("path")
    		.style("fill", function(d) { 
    			$scope.colors.push(color(d.data.trendlength));
    			return color(d.data.trendlength); 
    			})
    			.attr("class", "slice");

	  	slice   
		    .transition().duration(1000)
		    .attrTween("d", function(d) {
	      		this._current = this._current || d;
	      		var interpolate = d3.interpolate(this._current, d);
	      		this._current = interpolate(0);
	      		return function(t) {
	        		return arc(interpolate(t));
	      			};
	    		})

  		slice.exit()
    		.remove();

  		/* ------- TEXT LABELS -------*/

	  	var text = svg.select(".labels").selectAll("text")
	    				.data(pie(data), key);

	  	text.enter()
	    	.append("text")
	    	.attr("dy", ".35em")
	    	.text(function(d) {
	      		return formatPercent(d.data.trendlength/100);
	    	});
	  
	  	function midAngle(d){
	    	return d.startAngle + (d.endAngle - d.startAngle)/2;
	  	}

	  	text.transition().duration(1000)
	    	.attrTween("transform", function(d) {
	      		this._current = this._current || d;
	      		var interpolate = d3.interpolate(this._current, d);
	      		this._current = interpolate(0);
	      		return function(t) {
	        		var d2 = interpolate(t);
	        		var pos = outerArc.centroid(d2);
	        		pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
	        		return "translate("+ pos +")";
	      		};
	    	})

	    	.styleTween("text-anchor", function(d){
	      		this._current = this._current || d;
	      		var interpolate = d3.interpolate(this._current, d);
	      		this._current = interpolate(0);
	      		return function(t) {
	        		var d2 = interpolate(t);
	        		return midAngle(d2) < Math.PI ? "start":"end";
	      		};
	    	});

  		text.exit()
    		.remove();

  		/* ------- SLICE TO TEXT POLYLINES -------*/

	  	var polyline = svg.select(".lines").selectAll("polyline")
	   						.data(pie(data), key);
	  
	  	polyline.enter()
	    	.append("polyline");

	  	polyline.transition().duration(1000)
	    	.attrTween("points", function(d){
	      		this._current = this._current || d;
			    var interpolate = d3.interpolate(this._current, d);
			    this._current = interpolate(0);
			    return function(t) {
	        		var d2 = interpolate(t);
	        		var pos = outerArc.centroid(d2);
	        		pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
	        		return [arc.centroid(d2), outerArc.centroid(d2), pos];
	      		};      
	    	});
	  
	  	polyline.exit()
	    	.remove();
		
		$scope.mergeColors();
	}

	$scope.mergeColors = function() {
		$scope.trendswithcolor = $scope.piedata;
		colors = $scope.colors;
		for(i=0; i<colors.length; i++) {
			$scope.trendswithcolor[i].color = colors[i];
		}
	}

}]);