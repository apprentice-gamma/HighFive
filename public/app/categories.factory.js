(function() {
    angular.module('HighFive').factory('CategoriesFactory', CategoriesFactory);


    function CategoriesFactory($http) {
        var detroitLabsLat = 42.3353685;
        var detroitLabsLng = -83.04925;
        var northvilleLat = 42.4269282;
        var northvilleLng = -83.4694949;
        var factory = {};
        factory.currentAddress = ''
        factory.categories = ["Pizza", "Healthy", "Bar Food", "Formal", "Quick"];
        factory.pizzaList = [];
        factory.quickList = [];
        factory.formalList = [];
        factory.healthyList = [];
        factory.barFoodList = [];
        factory.detroitLabsLat = 
        factory.testLocationLat = detroitLabsLat;
        factory.testLocationLng = detroitLabsLng;
        factory.dude = 'Dude';
        factory.speak = function (text){
            var msg = new SpeechSynthesisUtterance();
            msg.text = text;
            msg.rate = .1;
            speechSynthesis.speak(msg);
        };

        factory.findAddress = function(lat, lng){
            var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=";
            return $http.get(url + lat + ',' + lng + '&sensor=true');

        }
        factory.initializeSearch = function (googleTextSearch){
            var searchLocation = new google.maps.LatLng(factory.testLocationLat, factory.testLocationLng);

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
                console.log(status);
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
