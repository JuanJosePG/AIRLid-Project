// Initialize and add the map
function initMap() {
    // The location of AIRLid viajes
    const  airlid = { lat: 36.64549536159755, lng: -4.6815955886947584 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: airlid,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: airlid,
      map: map,
    });
  }