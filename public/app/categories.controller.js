angular.module("HighFive").controller("CategoriesController", CategoriesController); 

function CategoriesController(CategoriesFactory, DistanceFactory){
	var vm = this;
    vm.categories = ["Pizza", "Healthy", "Bar Food", "Formal", "Quick"];
    
         vm.getDistance = function(list){
            list.forEach(function(object){
                var lat = object.geometry.location.k;
                var lng = object.geometry.location.D;

                DistanceFactory.getDistance(lat, lng).then(function(data){
                    object.distance = data;
                });


                // object.distance = returnedDistanceArray[0].distance.text;
                // console.log(object.distance, "TEST!!!!!!!!!!!");
            });
            
        }


   

        vm.getDistance(CategoriesFactory.pizzaList);
        vm.getDistance(CategoriesFactory.healthyList);
        vm.getDistance(CategoriesFactory.barFoodList);
        vm.getDistance(CategoriesFactory.quickList);
        vm.getDistance(CategoriesFactory.formalList);
        // console.log(CategoriesFactory.pizzaList);


    vm.speech = CategoriesFactory.sayMenu;
    vm.dude = CategoriesFactory.dude;
}

