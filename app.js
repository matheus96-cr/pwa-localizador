
// Função para obter localização
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("coords").innerText =
      "Geolocalização não é suportada neste navegador.";
  }
}

// Mostrar posição no mapa e buscar endereço
function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Exibir coordenadas
  document.getElementById("coords").innerText = `Latitude: ${lat}, Longitude: ${lon}`;

  // Buscar endereço usando API Nominatim (OpenStreetMap)
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("address").innerText =
        "Endereço: " + data.display_name;
    })
    .catch((error) => {
      document.getElementById("address").innerText = "Erro ao buscar endereço.";
    });

  // Mostrar mapa com Leaflet
  const map = L.map("map").setView([lat, lon], 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  L.marker([lat, lon]).addTo(map).bindPopup("Você está aqui!").openPopup();
}

// Tratamento de erros de geolocalização
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("coords").innerText = "Usuário negou a solicitação de geolocalização.";
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("coords").innerText = "Informações de localização indisponíveis.";
      break;
    case error.TIMEOUT:
      document.getElementById("coords").innerText = "A solicitação expirou.";
      break;
    default:
      document.getElementById("coords").innerText = "Erro desconhecido.";
      break;
  }
}

