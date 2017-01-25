(function() {

var app = angular.module("madLibsApp");

app.factory("libStore", function() {
	
	var storedLibs = {};
	
	return{
		setLib: function(lib){ 
			storedLibs = lib;
			},
		getLib: function() {
			return storedLibs;
			}
		};
});

//iffe bracket
})();