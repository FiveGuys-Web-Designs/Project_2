/*Andy Kukuc
Geldi Omeri
Daniel Rybski
Professor Krieglstein
ITMD-362-01
Project 2 JavaScript file
24th Oct. 2018*/

var map;
function initMap()
{
  map = new google.maps.Map(document.getElementById('map'),
  {
    center: {lat: -12.069344, lng: -77.080122},
    zoom: 10,
    mapTypeId: 'roadmap',
    mapTypeControl: true,
    mapTypeControlOptions:
    {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      mapTypeIds: ['roadmap', 'satellite'],
      position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions:
    {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  });

  var contentString =
    '<h1>Pontifical Catholic University of Peru</h1>';

  var infowindow = new google.maps.infoWindow(
    {
      content: contentString
    });

  var marker = new google.maps.Marker(
  {
    position: {lat: -12.069344, lng: -77.080122},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Pontifical Catholic University of Peru'
  });

  marker.addListener('click', function()
  {
    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);