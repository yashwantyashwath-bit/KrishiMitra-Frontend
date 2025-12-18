const API_BASE = "https://krishimitra-backend.onrender.com";

function getFarmingSuggestion() {

  const output = document.getElementById("output");
  output.innerHTML = "📍 Getting your location...";

  // 1️⃣ Check GPS support
  if (!navigator.geolocation) {
    output.innerText = "GPS not supported by your browser";
    return;
  }

  // 2️⃣ Get current position
  navigator.geolocation.getCurrentPosition(
    position => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      output.innerHTML = "🌾 Fetching farming suggestions...";

      // 3️⃣ Prepare payload for backend
      const payload = {
        soilType: "Loamy",        // can be dynamic later
        ph: 6.5,
        organicMatter: 2.0,
        lat: lat,
        lon: lon
      };

      // 4️⃣ Call backend API
      fetch(`${API_BASE}/api/farming/suggest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(data => {

        // 5️⃣ Render response
        let html = `
          <h3>🌾 Primary Recommendation</h3>
          <p><b>${data.primaryOption.category}</b></p>
          <ul>
        `;

        data.primaryOption.recommendedCrops.forEach(crop => {
          html += `
            <li>
              <b>${crop.crop}</b> (${crop.score}%)
              <br>
              <small>${crop.reason}</small>
            </li>
          `;
        });

        html += `</ul><h4>🌱 Secondary Options</h4><ul>`;

        data.secondaryOptions.forEach(opt => {
          html += `<li>${opt.name} – ${opt.reason}</li>`;
        });

        html += `</ul><h4>💰 Loan Schemes</h4><ul>`;

        data.loanSchemes.forEach(loan => {
          html += `<li><b>${loan.schemeName}</b>: ${loan.purpose}</li>`;
        });

        html += `</ul>`;

        output.innerHTML = html;
      })
      .catch(err => {
        console.error(err);
        output.innerText = "Error fetching suggestion";
      });
    },

    // 6️⃣ If user denies GPS
    error => {
      output.innerText = "Location permission denied";
    }
  );
}
