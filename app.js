(function(){
var app = angular.module("madLibsApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/form", {
		templateUrl: "views/form.html",
		controller: "addMadLibs"
	});
	$routeProvider.when("/libs", {
		templateUrl: "views/libs.html",
		controller: "getMadLibs"
	});
	$routeProvider.otherwise({
		templateUrl: "views/form.html"
	});
});

app.controller("addMadLibs", function($scope, libStore){
	$scope.saveWords = function(wordsToAdd){
    	var storedLibs = $scope.source;
    	
    	libStore.setLib(storedLibs);
};

});    

app.controller("getMadLibs", function($scope, libStore){
	
	var storedLibs = libStore.getLib();
	console.log(storedLibs);
	$scope.storedLibs = storedLibs;

});

app.factory("libStore", function() {
	
	var storedLibs = {};
	
	return{
		setLib: function(lib){ 
			storedLibs = lib;
			console.log(storedLibs)
		},
		getLib: function() {
			return storedLibs;
			console.log('service2')
		}
	};
});

})();