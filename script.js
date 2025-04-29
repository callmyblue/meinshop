// Diese Funktion fügt ein Produkt zum Warenkorb hinzu
let warenkorb = [];

function produktHinzufuegen(produkt) {
  warenkorb.push(produkt);
  updateWarenkorbAnzeige();
}

// Diese Funktion aktualisiert die Warenkorb-Anzeige
function updateWarenkorbAnzeige() {
  const warenkorbContainer = document.getElementById('warenkorb');
  warenkorbContainer.innerHTML = ''; // Leert den Warenkorb

  if (warenkorb.length === 0) {
    warenkorbContainer.innerHTML = 'Warenkorb ist leer';
  } else {
    let gesamtpreis = 0;
    warenkorb.forEach((item, index) => {
      gesamtpreis += item.preis;
      const itemDiv = document.createElement('div');
      itemDiv.className = 'warenkorb-item';
      itemDiv.innerHTML = `
        <p>${item.name} - ${item.preis} €</p>
        <button onclick="entfernen(${index})">Entfernen</button>
      `;
      warenkorbContainer.appendChild(itemDiv);
    });
    const gesamtDiv = document.createElement('div');
    gesamtDiv.className = 'gesamtpreis';
    gesamtDiv.innerHTML = Gesamt: ${gesamtpreis.toFixed(2)} €;
    warenkorbContainer.appendChild(gesamtDiv);

    // Zeige Checkout-Button an
    const checkoutButton = document.createElement('button');
    checkoutButton.innerText = 'Zur Kasse';
    checkoutButton.onclick = startCheckout;
    warenkorbContainer.appendChild(checkoutButton);
  }
}

// Diese Funktion entfernt ein Produkt aus dem Warenkorb
function entfernen(index) {
  warenkorb.splice(index, 1);
  updateWarenkorbAnzeige();
}

// Checkout-Prozess
function startCheckout() {
  if (warenkorb.length === 0) {
    alert('Dein Warenkorb ist leer!');
    return;
  }

  // Simuliert den Checkout-Prozess (Beispiel-Link zu PayPal)
  alert('Der Checkout-Prozess wird gestartet!');
  window.location.href = "https://www.paypal.com"; // Dummy-Link für Testzwecke
}

// Hier wird die JSON-Datei geladen, um die Produkte anzuzeigen
fetch('produkte.json')
  .then(response => response.json()) // Konvertiert die Antwort in ein JSON-Objekt
  .then(data => {
    const container = document.getElementById('produkte'); // Der Container für die Produktanzeigen
    data.forEach(produkt => {
      const card = document.createElement('div'); // Ein neues Div für jedes Produkt
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${produkt.bild}" alt="${produkt.name}">
        <div class="product-details">
          <h3 class="product-title">${produkt.name}</h3>
          <p class="product-price">${produkt.preis.toFixed(2)} €</p>
          <button class="btn" onclick='produktHinzufuegen(${JSON.stringify(produkt)})'>In den Warenkorb</button>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.log("Fehler beim Laden der Produkte: ", err)); // Fehlerbehandlung
