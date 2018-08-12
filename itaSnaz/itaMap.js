google.maps.event.addDomListener(window, 'load', init);

function init() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(31.0702301, -94.4901085),
    // Huntington, TX

    // This is where you paste any style found on Snazzy Maps.
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "hue": "#ff4400"
      }, {
        "saturation": -68
      }, {
        "lightness": -4
      }, {
        "gamma": 0.72
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.icon"
    }, {
      "featureType": "landscape.man_made",
      "elementType": "geometry",
      "stylers": [{
        "hue": "#0077ff"
      }, {
        "gamma": 3.1
      }]
    }, {
      "featureType": "water",
      "stylers": [{
        "hue": "#00ccff"
      }, {
        "gamma": 0.44
      }, {
        "saturation": -33
      }]
    }, {
      "featureType": "poi.park",
      "stylers": [{
        "hue": "#44ff00"
      }, {
        "saturation": -23
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "hue": "#007fff"
      }, {
        "gamma": 0.77
      }, {
        "saturation": 65
      }, {
        "lightness": 99
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "gamma": 0.11
      }, {
        "weight": 5.6
      }, {
        "saturation": 99
      }, {
        "hue": "#0091ff"
      }, {
        "lightness": -86
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "lightness": -48
      }, {
        "hue": "#ff5e00"
      }, {
        "gamma": 1.2
      }, {
        "saturation": -23
      }]
    }, {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "saturation": -64
      }, {
        "hue": "#ff9100"
      }, {
        "lightness": 16
      }, {
        "gamma": 0.47
      }, {
        "weight": 2.7
      }]
    }]
  };

  // A div tag with id="map-canvas" in the <body>
  var mapElement = document.getElementById('map-canvas');
  // Create the Google Map using our element and options above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Add a marker
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(31.0702301, -94.4901085),
    map: map,
       icon: 'imgs/star-marker.png',
       animation: google.maps.Animation.DROP,
          //'http://maps.google.com/mapfiles/marker_green.png
  });

  // Construct a new InfoWindow.
  var infowindow = new google.maps.InfoWindow({
      maxWidth: 130,
      content: 'www.iteka.com<br>312 Vj Cryer Rd.<br>Huntington, Tx 75949'
  });

  // Opens the InfoWindow when marker is clicked.
  marker.addListener('click', function() {
  infowindow.open(map, marker);
  });

}
