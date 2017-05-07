document.addEventListener("deviceready", init, false);

function init() {
    alertDialog();
    viewMap();
}

    //Test Alerts
   function alertDialog() {
    document.querySelector("#alertTest").addEventListener("touchend",
        function () {
            
            navigator.notification.alert(
                "Testing alert...", // body message
                null, // callback
                "Alert Test", //title
                "All Set" //button
            );
            //body, callback, title, button
        }, false);
    
}


function viewMap() {

var duCoords = {
    latitude: 39.676,
    longitude: -104.958
}; 


   if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
   }
       else {
        alert("Oops, no location");
       }  

        function displayLocation(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            
            var div = document.getElementById("location");
            div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude; 
            
            var km = computeDistance(position.coords, duCoords);
            var distance = document.getElementById("distance");
            distance.innerHTML = "<p>You are " + km + " km from University of Denver, University College</p>";
            showMap(position.coords);
            
        
}
// Ready Bake - Haversine equation to find the distance between two points provided by "Head First into HTML5 Programming"

function computeDistance(startCoords, destCoords) {
	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);

	var Radius = 6371; // radius of the Earth in km
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
					Math.cos(startLatRads) * Math.cos(destLatRads) *
					Math.cos(startLongRads - destLongRads)) * Radius;

	return distance;
}

function degreesToRadians(degrees) {
	radians = (degrees * Math.PI)/180;
	return radians;
}

// End Ready Bake
   
//map code

function showMap(coords) {
    var googleLatAndLong =
        new google.maps.LatLng(coords.latitude, coords.longitude);

var mapOptions = {
    zoom: 4,
    center: googleLatAndLong,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
     


var mapDiv = document.getElementById("map");
map = new google.maps.Map(mapDiv, mapOptions);
// add the user marker
	var title = "Your Location";
	var content = "You are here: " + coords.latitude + ", " + coords.longitude;
	addMarker(map, googleLatAndLong, title, content);
}

function addMarker(map, latlong, title, content) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		clickable: true
	};
    
	var marker = new google.maps.Marker(markerOptions); // marker shows my current location
    
    // marker2 adds a marker for DU University College location
    var marker2 = new google.maps.Marker({    
        position: {lat: 39.676, lng: -104.958},
        map: map
    });

	var infoWindowOptions = {
		content: content,
		position: latlong
	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map);
	});

}
	
//end map code

 function displayError(error) {
            var errorTypes = {
                0: "Unknown error",
                1: "Permission denied by user",
                2: "Position is not available",
                3: "Request timed out"
            };
            var errorMessage = errorTypes[error.code];
            if (error.code == 0 || error.code == 2) {
                errorMessage = errorMessage + " " + error.message;
            }
            var div = document.getElementById("location");
            div.innerHTML = errorMessage;
        }
}

