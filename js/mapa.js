const map = L.map('map').setView([40.4193, -3.6931], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// TIENDA (Cibeles, Madrid como ejemplo)
const tiendaLatLng = [40.4193, -3.6931];
L.marker(tiendaLatLng).addTo(map)
  .bindPopup("<b>Dream Trips</b><br>Plaza de Cibeles, 1, 28014 Madrid")
  .openPopup();

// USUARIO
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const userLatLng = [pos.coords.latitude, pos.coords.longitude];
      L.marker(userLatLng).addTo(map)
        .bindPopup("Tu ubicación");
    },
    () => {
      console.log("No se pudo obtener tu ubicación.");
    }
  );
}