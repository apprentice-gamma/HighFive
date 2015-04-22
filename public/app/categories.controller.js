angular.module("HighFive").controller("CategoriesController", CategoriesController); 

function CategoriesController(CategoriesFactory, DistanceFactory){
	var vm = this;
    vm.categories = ["Pizza", "Healthy", "Bar Food", "Formal", "Quick"];
    
         vm.getDistance = function(list){
            list.forEach(function(object){
                var lat = object.geometry.location.k;
                var lng = object.geometry.location.D;

                DistanceFactory.getDistance(lat, lng, callback);

                function callback(response, status) {
                    if (status == google.maps.DistanceMatrixStatus.OK) {
                        var origins = response.originAddresses;
                        var destinations = response.destinationAddresses;

                        for (var i = 0; i < origins.length; i++) {
                          var results = response.rows[i].elements;
                          for (var j = 0; j < results.length; j++) {
                            var element = results[j];
                            var distance = element.distance.text;
                            var duration = element.duration.text;
                            var from = origins[i];
                            var to = destinations[j];
                          }
                        }
                      }
                        object.distance = results[0];
                        console.log(object.distance);
                    }
                // object.distance = returnedDistanceArray[0].distance.text;
                // console.log(object.distance, "TEST!!!!!!!!!!!");
            });
            
        }


   

        vm.getDistance(CategoriesFactory.pizzaList);
        vm.getDistance(CategoriesFactory.healthyList);
        vm.getDistance(CategoriesFactory.barFoodList);
        vm.getDistance(CategoriesFactory.quickList);
        vm.getDistance(CategoriesFactory.formalList);
        console.log(CategoriesFactory.pizzaList);


    vm.speech = CategoriesFactory.sayMenu;
    vm.dude = CategoriesFactory.dude;
}

