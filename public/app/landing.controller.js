(function(){
	angular.module("HighFive").controller("LandingController", LandingController);

	function LandingController (CategoriesFactory, $timeout, $location){
		var vm = this;
		vm.currentAddress = 
		CategoriesFactory.pizzaList = CategoriesFactory.initializeSearch('pizza restaurant');
    	CategoriesFactory.formalList = CategoriesFactory.initializeSearch('fine dining');
    	CategoriesFactory.healthyList = CategoriesFactory.initializeSearch('healthy restaurant');
    	CategoriesFactory.barFoodList = CategoriesFactory.initializeSearch('bar food');
    	CategoriesFactory.quickList = CategoriesFactory.initializeSearch('fast food');

    	CategoriesFactory.findAddress(CategoriesFactory.testLocationLat, CategoriesFactory.testLocationLng).success(function(data){
    		vm.currentAddress = data.results[0].formatted_address;
    	});

    	 $timeout(function(){
    	   $location.path("/categories")
    	 }, 3000);
	}

})();