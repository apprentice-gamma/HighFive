(function() {
    angular.module('HighFive').factory('CategoriesFactory', CategoriesFactory);

    function CategoriesFactory() {

    	var factory = {};
        factory.pizzaList = [];
        factory.quickList = [];
        factory.formalList = [];
        factory.healthyList = [];
        factory.barFoodList = [];

        factory.initialize = function (googleTextSearch){
            var searchLocation = new google.maps.LatLng(42.3353685,-83.04925);

            var map = new google.maps.Map(document.getElementById('map'), {
                center: searchLocation,
                zoom: 15
            });
            
            var request = {
                location: searchLocation,
                radius: '8046.72',
                query: googleTextSearch,
            };

            var service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);

            var tempArray = [];
            function callback(results, status) {
              if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    tempArray.push(results[i]);
                  // console.log(results[i]);
                  // createMarker(results[i]);
                }
              }
            }
            return tempArray
            
    },
    	return factory;
    }
})();
