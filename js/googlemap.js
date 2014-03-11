function GoogleMap() {

    this.initialize = function() {
        var map = showMap();
    };

    var showMap = function() {
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(48.8579564, 2.3637318),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        return map;
    };
}