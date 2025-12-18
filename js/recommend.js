function getFarmingSuggestion() {

    // 🔥 HIDE PLACEHOLDER WHEN USER CLICKS
    document.getElementById("placeholder").style.display = "none";

    document.getElementById("output").innerHTML = "";
    document.getElementById("backBtn").style.display = "none";

    if (!navigator.geolocation) {
        alert("GPS not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        position => {
            const payload = {
                soilType: "Loamy",
                ph: 6.5,
                organicMatter: 2.0,
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };

            fetch("/api/farming/suggest", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            .then(data => render(data))
            .catch(() => {
                document.getElementById("output").innerHTML =
                    "<p>Error fetching suggestion</p>";
            });
        }
    );
}

function render(data) {

    let html = `
        <div class="card">
            <h3>🌾 Primary Recommendation</h3>
            <p><b>${data.primaryOption.category}</b></p>

            <h4>Best Crop Suggestions</h4>
            <ul>
    `;

    data.primaryOption.recommendedCrops.forEach(crop => {
        html += `
            <li>
                <b>${crop.crop}</b> (${crop.score}%)
                <br>
                <span class="small">${crop.reason}</span>
            </li>
        `;
    });

    html += `
            </ul>
        </div>

        <div class="card">
            <h3>🌱 Secondary Income Options</h3>
            <ul>
    `;

    data.secondaryOptions.forEach(o => {
        html += `<li>${o.name} – ${o.reason}</li>`;
    });

    html += `
            </ul>
        </div>

        <div class="card">
            <h3>💰 Loans & Government Support</h3>
            <ul>
    `;

    data.loanSchemes.forEach(l => {
        html += `<li><b>${l.schemeName}</b>: ${l.purpose}</li>`;
    });

    html += `
            </ul>
        </div>
    `;

    document.getElementById("output").innerHTML = html;

    // ✅ SHOW BACK BUTTON AFTER RESULT LOADS
    document.getElementById("backBtn").style.display = "block";
}
