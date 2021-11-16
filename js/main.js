
var elForm = document.querySelector('#site_form');
var elInputDistance = document.querySelector('#distance');
var elSubmitBtn = document.querySelector('#submit_btn');

var elPerson = document.querySelector('#on_person');
var elBike = document.querySelector('#by_bike');
var elCar = document.querySelector('#by_car');
var elPlane = document.querySelector('#by_plane');


var SPEED_ON_PERSON = 3.6;
var SPEED_BY_BIKE = 20.1;
var SPEED_BY_CAR = 100;
var SPEED_BY_PLANE = 800;


function calculateDistance(distance, speed) {
    var hours = Math.floor(distance / speed);
    var minuts = Math.floor((distance / speed - hours) * 60);
    var seconds = Math.ceil(((distance / speed - hours) * 60 - minuts) * 60);
    
    var minut11 = minuts? `${minuts} minut` : "" ;
    var secund11 = seconds? `${seconds} secund` : "" ;

    if (hours === 0 && minuts === 0) {
        return `${minut11} ${secund11}`
    } else if(hours === 0) {
        return `${minut11} ${secund11}`
    } else {
        return `${hours} soat ${minut11} ${secund11}`
    }
}

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var inputDistance = Number(elInputDistance.value.trim());

    if (inputDistance <= 0) {
        alert("Nuldan katta raqam kiriting");
    } else if (isNaN(inputDistance)) {
        alert("Raqam kiriting");
    }
    
    elPerson.textContent = calculateDistance(inputDistance, SPEED_ON_PERSON);
    elBike.textContent = calculateDistance(inputDistance, SPEED_BY_BIKE);
    elCar.textContent = calculateDistance(inputDistance, SPEED_BY_CAR);
    elPlane.textContent = calculateDistance(inputDistance, SPEED_BY_PLANE);
})
