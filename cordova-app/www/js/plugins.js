document.addEventListener("deviceready", init, false);

function init() {
    alertDialog();
   document.getElementById("getPosition").addEventListener("touchend", getPosition);
}

//Test Alerts
function alertDialog() {
    document.querySelector("#alertTest").addEventListener("touchend",
        function () {

            navigator.notification.alert(
                "Hard tacos are best when wrapped in a soft taco shell.", // body message
                null, // callback
                "Tacos", //title
                "Contain the crunch" //button
            );
            //body, callback, title, button
        }, false);
}

function getPosition() {
    
var guzCoords = {
    latitude: 43.637,
    longitude: -72.291
};
    
   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
	
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {
       
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var div = document.getElementById("location");
    div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;

    var km = computeDistance(position.coords, guzCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "<p>You are " + km + " km from Gusanoz</p>";
    showMap(position.coords);
}
       

/*
      alert('Latitude: '          + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
         */
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
    radians = (degrees * Math.PI) / 180;
    return radians;
}

// End Ready Bake
    

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
function showMap(coords) {
    var googleLatAndLong =
        new google.maps.LatLng(coords.latitude, coords.longitude);

    var mapOptions = {
        zoom: 4,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        enableHighAccuracy: true,
        maximumAge: 3600000
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

    var marker = new google.maps.Marker(markerOptions); 
    // marker shows my current location
    
    var marker2 = new google.maps.Marker({
        // marker2 adds a marker for Gusanoz
        position: {
            lat: 43.637,
            lng: -72.291
        },
        map: map
    });
    
    
}
}
