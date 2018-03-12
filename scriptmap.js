var map;
$(document).ready(function() {
  map = new GMaps({
    el: "#map",
    lat: 45.760255,
    lng: 4.828231899999992
  });
  map.addMarker({
    lat: 45.760255,
    lng: 4.828231899999992,
    title: "Lyon",
    details: {
      database_id: 42,
      author: "HPNeo"
    },
    click: function(e) {
      if (console.log) console.log(e);
      alert("Bug Cooker - 33 Quai Romain Rolland - 69005 Lyon");
    },
    mouseover: function(e) {
      if (console.log) console.log(e);
    }
  });
  map.addMarker({
    lat: 45.760255,
    lng: 4.828231899999992,
    title: "Marker with InfoWindow",
    infoWindow: {
      content: "<p>HTML Content</p>"
    }
  });
});
