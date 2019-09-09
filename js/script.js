//NavBar

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
            }
        });
    });
}

function myMap() {
    var mapCenter = {lat: -8.063128, lng: -34.871162};
    var firstPoint = {lat: -8.063646, lng: -34.871743};
    var secondPoint = {lat: -8.063930, lng: -34.871686};
    var thirdPoint = {lat: -8.063273, lng: -34.871766};

    var mapProperties= { //defines the properties for the map.
      center:new google.maps.LatLng(mapCenter), //specifies where to center the map (using latitude and longitude coordinates).
      zoom:15 //specifies the zoom level for the map (try to experiment with the zoom level).
    };
    
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProperties);
    
    var sympleBinMarker = new google.maps.Marker({
        position: firstPoint, 
        map: map,
        icon: 'images/symple-bin.png'
    });

    var recycleBinMarker = new google.maps.Marker({
        position: secondPoint, 
        map: map,
        icon: 'images/recycle-bin.png'
    });

    var allRecycleBinMarker = new google.maps.Marker({
        position: thirdPoint, 
        map: map,
        icon: 'images/all-recycle-bin.png'
    });
    
    var directionsDisplay = new google.maps.direc
    var directionsService = new google.maps.directionsService();
}

$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
});

// initMap();
navSlide();
myMap();