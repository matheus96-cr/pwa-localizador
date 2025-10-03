# 📍 PWA Localizador

Este projeto é um **Progressive Web App (PWA)** que utiliza **geolocalização** para mostrar a posição atual do usuário em um **mapa interativo**, além de exibir o **endereço correspondente** consumindo uma **API pública (Nominatim - OpenStreetMap)**.

---

## 🚀 Funcionalidades

- Obter a **latitude e longitude** do usuário via `navigator.geolocation`.
- Exibir a localização em um **mapa interativo** (Leaflet).
- Adicionar um **marcador** no ponto atual do usuário.
- Consumir a **API Nominatim (OpenStreetMap)** para converter coordenadas em endereço real.
- Funcionar como **PWA**, podendo ser instalado no celular ou desktop.
- **Service Worker** para cache offline básico.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** → Estrutura da aplicação.
- **CSS3** → Estilização, centralização de elementos e responsividade.
- **JavaScript (ES6)** → Lógica principal da aplicação.
- **Leaflet.js** → Biblioteca para exibição de mapas interativos.
- **Manifest (manifest.json)** → Configurações do PWA (ícones, tema, nome).
- **Service Worker** → Cache e suporte offline.

---

## 🌍 API Utilizada

### [Nominatim API (OpenStreetMap)](https://nominatim.org/release-docs/latest/api/Reverse/)

A API **Nominatim** foi usada para **geocodificação reversa**, ou seja, transformar coordenadas geográficas em endereços legíveis.

Exemplo da chamada feita no projeto:

```javascript
fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("address").innerText =
      "Endereço: " + data.display_name;
  });
