function initMap() {
    const venueLocation = { lat: 28.251827313497678, lng: 77.28962325295142 };

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
            "https://www.google.com/maps?q=28.251827313497678,77.28962325295142",
            "_blank"
        );
    });
}

google.maps.event.addDomListener(window, "load", initMap);