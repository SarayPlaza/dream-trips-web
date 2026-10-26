document.addEventListener('DOMContentLoaded', function() {
    let latitud = 40.4193;
    let longitud = -3.6932;
    let nombreUbicacion = 'Dream Trips';

    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
            nombreUbicacion = 'Tu ubicación';
            inicializarMapa(latitud, longitud, nombreUbicacion);
        }, function(error) {
            console.log('Error al obtener la geolocalización, usando ubicación por defecto:', error);
            inicializarMapa(latitud, longitud, nombreUbicacion);
        });
    } else {
        inicializarMapa(latitud, longitud, nombreUbicacion);
    }
});

function inicializarMapa(lat, lng, nombre) {
    // Crear el mapa
    const mapa = L.map('map').setView([lat, lng], 13);

    // Agregamos las capas de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(mapa);

    // Agregar un marcador
    L.marker([lat, lng]).addTo(mapa)
        .bindPopup(`<strong>${nombre}</strong><br>Ven a visitarnos.`)
        .openPopup();
}