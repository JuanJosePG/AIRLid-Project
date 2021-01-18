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



//Scroll button
mybutton = document.querySelector(".scroll-button");

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.documentElement.scrollTop = 0;
}