function getSuggestion() {
  const resultDiv = document.getElementById("result");

  if (!resultDiv) {
    alert("Result div not found!");
    return;
  }

  const primary = [
    "Rice Farming",
    "Cotton Cultivation",
    "Maize Farming",
    "Groundnut Farming",
    "Sugarcane Farming"
  ];

  const secondary = [
    "Dairy Farming",
    "Goat Rearing",
    "Poultry Farming",
    "Fish Farming",
    "Beekeeping"
  ];

  const primaryChoice =
    primary[Math.floor(Math.random() * primary.length)];

  const secondaryChoice =
    secondary[Math.floor(Math.random() * secondary.length)];

  resultDiv.innerHTML = `
    <h3>🌾 Recommendation Result</h3>
    <p><strong>Primary:</strong> ${primaryChoice}</p>
    <p><strong>Secondary:</strong> ${secondaryChoice}</p>
  `;
}
