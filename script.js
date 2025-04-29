let warenkorb = [];

// Funktion, um Produkte zum Warenkorb hinzuzufügen
function produktHinzufuegen(produkt) {
  warenkorb.push(produkt);
  updateWarenkorbAnzeige();
}

// Funktion, um den Warenkorb anzuzeigen
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

// Funktion, um ein Produkt zu entfernen
function entfernen(index) {
  warenkorb.splice(index, 1);
  updateWarenkorbAnzeige();
}

// Checkout-Funktion
function startCheckout() {
  alert('Der Checkout-Prozess wird gestartet!');
  // Hier könntest du die Zahlung integrieren (z. B. PayPal API)
}
