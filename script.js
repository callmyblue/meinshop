fetch('produkte.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('produkte');
    data.forEach(produkt => {
      const card = document.createElement('div');
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
  .catch(err => console.log("Fehler beim Laden der Produkte: ", err));
