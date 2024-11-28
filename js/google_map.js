function initMap() {
    const venueLocation = { lat: 28.25177631231207, lng: 77.28963990633393 };

    // Map options
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: venueLocation,
    });

    // Marker
    const marker = new google.maps.Marker({
        position: venueLocation,
        map: map,
        title: "Wedding Venue",
    });

    // Clickable marker opens Google Maps
    marker.addListener("click", () => {
        window.open(
            "https://www.google.com/maps?q=28.25177631231207,77.28963990633393",
            "_blank"
        );
    });
}

google.maps.event.addDomListener(window, "load", initMap);