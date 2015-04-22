angular.module("HighFive").controller("CategoriesController", CategoriesController); 
function CategoriesController(CategoriesFactory){
	var vm = this;
    vm.categories = ["Pizza", "Healthy", "Bar Food", "Formal", "Quick"];
    CategoriesFactory.pizzaList = CategoriesFactory.initializeSearch('pizza restaurant');
    CategoriesFactory.formalList = CategoriesFactory.initializeSearch('fine dining');
    CategoriesFactory.healthyList = CategoriesFactory.initializeSearch('healthy restaurant');
    CategoriesFactory.barFoodList = CategoriesFactory.initializeSearch('bar food');
    CategoriesFactory.quickList = CategoriesFactory.initializeSearch('fast food');

    vm.speech = CategoriesFactory.sayMenu;
    vm.dude = CategoriesFactory.dude;
}

