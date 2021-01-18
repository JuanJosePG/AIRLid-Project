// Initialize and add the map
function initMap() {
    // The location of AIRLid viajes
    const airlid = { lat: 36.64549536159755, lng: -4.6815955886947584 };
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
let scrollToTopButton = document.querySelector(".scroll-button");

function handleScroll(){
    let scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if((document.documentElement.scrollTop/scrollTotal) > 0.40){
        scrollToTopButton.classList.add("showButton");
    } else {
        scrollToTopButton.classList.remove("showButton");
    }

    if((document.documentElement.scrollTop/scrollTotal) > 0.95){
        scrollToTopButton.classList.add("invertedButton");
    } else {
        scrollToTopButton.classList.remove("invertedButton");
    }
}

function scrollToTop(){
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

scrollToTopButton.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)