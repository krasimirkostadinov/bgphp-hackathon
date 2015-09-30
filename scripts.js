//maps api key
//

var model = {};


var map;

var coordinates = {lat: -34.99766486, lng: 149.87495703};

function updateCoordinatesUi() {
    $('#lat').text(coordinates.lat);
    $('#lng').text(coordinates.lng);
}


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 6
    });

    marker = new google.maps.Marker({
        position: coordinates,
        map: window.map,
        draggable: true,
        title: 'Hello World!',
        animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(marker, "dragend", function (event) {
        coordinates.lat = parseFloat(parseFloat(event.latLng.lat()).toFixed(8));
        coordinates.lng = parseFloat(parseFloat(event.latLng.lng()).toFixed(8));

        updateCoordinatesUi();

    });
}

$(document).ready(function () {
    updateCoordinatesUi();
    ko.applyBindings(ko.mapping.fromJS(window.model, document.getElementById('sidenav')));
});

$(document).on('click', '#addNewBtn', function () {

    $.ajax({
        url: '?',
        method: 'GET'
    }).done(function (rsp) {
        console.log(rsp);
    });


    $.ajax({
        url: '?',
        method: 'POST',
        data: {
            country: $('#country').val(),
            lat: coordinates.lat,
            lng: coordinates.lng
        }
    }).done(function (rsp) {
        console.log(rsp);
    });
});