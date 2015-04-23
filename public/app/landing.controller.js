(function(){
	angular.module("HighFive").controller("LandingController", LandingController);

	function LandingController (CategoriesFactory){
		var vm = this;
		vm.currentAddress = CategoriesFactory.currentAddress;
		CategoriesFactory.pizzaList = CategoriesFactory.initializeSearch('pizza restaurant');
    	CategoriesFactory.formalList = CategoriesFactory.initializeSearch('fine dining');
    	CategoriesFactory.healthyList = CategoriesFactory.initializeSearch('healthy restaurant');
    	CategoriesFactory.barFoodList = CategoriesFactory.initializeSearch('bar food');
    	CategoriesFactory.quickList = CategoriesFactory.initializeSearch('fast food');

    	CategoriesFactory.findAddress(CategoriesFactory.testLocationLat, CategoriesFactory.testLocationLng);

	}

})();