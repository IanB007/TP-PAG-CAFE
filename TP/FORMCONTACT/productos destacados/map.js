function iniciarMap(){
  var coord = {lat: -34.7038112 ,lng: -58.3823451};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.map.Marker({
    position: coord,
    map
  })
  
}