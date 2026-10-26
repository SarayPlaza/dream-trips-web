// MasterD: CL Alonso Berruguete (esquina Avda. General Villalba), 25
const masterD = [39.868592266653394, -4.0235857441781935];

const map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function mostrarMasterD() {
    map.setView(masterD, 16);
    L.marker(masterD).addTo(map)
    .bindPopup('<b>MasterD Toledo</b><br>CL Alonso Berruguete (esq. Avda. General Villalba), 25')
    .openPopup();
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
    (pos) => {
        const userLatLng = [pos.coords.latitude, pos.coords.longitude];
        map.setView(userLatLng, 15);
        L.marker(userLatLng).addTo(map)
        .bindPopup('Tu ubicación')
        .openPopup();
    },
    () => mostrarMasterD()
    );
} else {
    mostrarMasterD();
}