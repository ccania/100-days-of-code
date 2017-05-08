document.addEventListener("deviceready", init, false);

function init() {
    alertDialog();
    document.getElementById("getPosition").addEventListener("click", getPosition);
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

function getPosition() {

   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
	
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {

      alert('Latitude: '          + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}
