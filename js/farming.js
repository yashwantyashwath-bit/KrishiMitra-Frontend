function getSuggestion() {

    if (!navigator.geolocation) {
        alert("GPS not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition(position => {

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
        .then(data => render(data));
    });
}

function render(data) {
    let html = `
        <h3>PRIMARY RECOMMENDATION</h3>
        <p><b>${data.primaryOption.name}</b></p>
        <p>${data.primaryOption.reason}</p>

        <h3>SECONDARY INCOME OPTIONS</h3>
        <ul>
    `;

    data.secondaryOptions.forEach(o => {
        html += `<li>${o.name} – ${o.reason}</li>`;
    });

    html += `
        </ul>
        <h3>LOANS & GOVERNMENT SUPPORT</h3>
        <ul>
    `;

    data.loanSchemes.forEach(l => {
        html += `<li><b>${l.schemeName}</b>: ${l.purpose}</li>`;
    });

    html += "</ul>";

    document.getElementById("output").innerHTML = html;
}
