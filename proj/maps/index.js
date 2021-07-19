let map;
let apiKey2 = 'AIzaSyCrrM6t1dS36jnMhuDCOtu7_hq328mz188';
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}