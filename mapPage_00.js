function initialize() {
 var alameda = new google.maps.LatLng(35.206259,-106.655113)
 var mapOptions = {
 zoom: 16,
 center: alameda,
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 var map = new google.maps.Map(
 document.getElementById("map_canvas"),
 mapOptions);
 }
