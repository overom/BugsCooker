function initMap() {
  let lyon = { lat: 45.760255, lng: 4.828231899999992 };
  let map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 16,
    center: lyon,
    styles: [
      {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#e0efef"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "on"
          },
          {
            hue: "#1900ff"
          },
          {
            color: "#c0e8e8"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            lightness: 100
          },
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on"
          },
          {
            lightness: 700
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#7dcdcd"
          }
        ]
      }
    ]
  });

  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h2 id="firstHeading" class="firstHeading">Restaurant Bug Cooker</h2>' +
    '<div id="bodyContent">' +
    "<p><strong>33 Quai Romain Roland 69005 LYON</br>06 79 83 45 15</strong></p>" +
    "<p><b>Bug cooker</b>, Quand les insectes s’invitent dans la cuisine du chef étoilé <b>David Faure</b>... Prêts pour l’expérience ? " +
    '<a href="https://bug-cooker.com">' +
    "</br>https://bug-cooker.com</a>" +
    "</div>" +
    "</div>";

  let infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  let marker = new google.maps.Marker({
    position: lyon,
    map: map,
    title: "BugCookers"
  });
  marker.addListener("mouseover", function() {
    infowindow.open(map, marker);
  });

  google.maps.event.addDomListener(window, "resize", function() {
    let center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}
