(function() {
    angular.module('HighFive').factory('CategoriesFactory', CategoriesFactory);


    function CategoriesFactory() {

        var factory = {};
        factory.categories = ["Pizza", "Healthy", "Bar Food", "Formal", "Quick"];
        factory.pizzaList = ['pizza'];
        factory.quickList = ['quick'];
        factory.formalList = ['formal'];
        factory.healthyList = ['healthy'];
        factory.barFoodList = ['bar food'];
        factory.dude = 'Dude';
        factory.sayMenu = function (menuArray){
            var msg = new SpeechSynthesisUtterance();
            msg.text = "";
             for(var i = 0; i < menuArray.length; i++ ){
                 msg.text += menuArray[i]+". ";
                 console.log(msg.text);
             }
            speechSynthesis.speak(msg);
        };

        factory.initializeSearch = function (googleTextSearch){
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
            
        };
    	return factory;
    }
})();
