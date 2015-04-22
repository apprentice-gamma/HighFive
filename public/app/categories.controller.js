angular.module("HighFive").controller("CategoriesController", CategoriesController); 

function CategoriesController(CategoriesFactory){
	var vm = this;

	vm.speech = CategoriesFactory.sayMenu;
    vm.categories = CategoriesFactory.categories;
    CategoriesFactory.pizzaList = CategoriesFactory.initializeSearch('pizza restaurant');
    CategoriesFactory.formalList = CategoriesFactory.initializeSearch('fine dining');
    CategoriesFactory.healthyList = CategoriesFactory.initializeSearch('healthy restaurant');
    CategoriesFactory.barFoodList = CategoriesFactory.initializeSearch('bar food');
    CategoriesFactory.quickList = CategoriesFactory.initializeSearch('fast food');
}

