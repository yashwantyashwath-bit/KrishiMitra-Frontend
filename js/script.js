const API_BASE = "https://krishimitra-backend.onrender.com";

function getFarmingSuggestion() {

  document.getElementById("output").innerHTML = "Loading...";

  fetch(`${API_BASE}/crop-suggestion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      soil: "Loamy",
      season: "Kharif",
      language: "en"
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText = data.suggestion;
  })
  .catch(err => {
    document.getElementById("output").innerText = "Error connecting backend";
    console.error(err);
  });
}
