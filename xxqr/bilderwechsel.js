function zufallsBild() {
  // Anzahl der Bilder
  const anzahlBilder = 55
;

  // Zufälliges Hintergrundbild auswählen
  const zufallsBildNummer = Math.floor(Math.random() * anzahlBilder) + 1;
  const zufallsBild = `url('img/img${zufallsBildNummer}.jpg')`;
  
  // Hintergrundbild setzen
  document.body.style.backgroundImage = zufallsBild;
}

// Initial ein zufälliges Bild setzen
zufallsBild();

// Automatischer Wechsel alle 5 Sekunden
setInterval(zufallsBild, 10000);