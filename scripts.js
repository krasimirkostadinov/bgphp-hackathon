//maps api key
//

var model = {

};


var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

$(document).ready(function () {
    ko.applyBindings(ko.mapping.fromJS(window.model, document.getElementById('sidenav')));
});