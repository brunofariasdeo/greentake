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
    let mapCenter = {lat: -8.063128, lng: -34.871162};
    let mapPoints = [{lat: -8.063646, lng: -34.871743},{lat: -8.063930, lng: -34.871686},{lat: -8.063273, lng: -34.871766}, {lat: -8.064438, lng:-34.871983}];

    let mapProperties= { //defines the properties for the map.
      center:new google.maps.LatLng(mapCenter), //specifies where to center the map (using latitude and longitude coordinates).
      zoom:18 //specifies the zoom level for the map (try to experiment with the zoom level).
    };
    
    let map = new google.maps.Map(document.getElementById("googleMap"),mapProperties);

    for (let i=0;i<mapPoints.length;i++){
        if ((mapPoints.indexOf(mapPoints[i])%2) === 0){
            var sympleBinMarker = new google.maps.Marker({
                position: mapPoints[i], 
                map: map,
                icon: 'images/symple-bin.png'
            });
        }
        else if ((mapPoints.indexOf(mapPoints[i])%3) === 0){
            var recycleBinMarker = new google.maps.Marker({
                position: mapPoints[i], 
                map: map,
                icon: 'images/recycle-bin.png'
            });
        }
        else {
            var allRecycleBinMarker = new google.maps.Marker({
                position: mapPoints[i], 
                map: map,
                icon: 'images/all-recycle-bin.png'
            });
        }
    }
    
    let directionsDisplay = new google.maps.direc
    let directionsService = new google.maps.directionsService();
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