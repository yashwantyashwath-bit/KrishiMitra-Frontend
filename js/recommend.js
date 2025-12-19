function getSuggestion() {
  const resultDiv = document.getElementById("result");

  // simulate GPS based suggestion
  const primary = [
    "Rice farming",
    "Cotton cultivation",
    "Maize farming",
    "Paddy farming",
    "Groundnut farming"
  ];

  const secondary = [
    "Dairy farming",
    "Goat rearing",
    "Poultry farming",
    "Fish farming",
    "Beekeeping"
  ];

  const p = primary[Math.floor(Math.random() * primary.length)];
  const s = secondary[Math.floor(Math.random() * secondary.length)];

  resultDiv.innerHTML = `
    <h3>🌾 Farming Recommendation</h3>
    <p><b>Primary:</b> ${p}</p>
    <p><b>Secondary:</b> ${s}</p>
  `;
}
