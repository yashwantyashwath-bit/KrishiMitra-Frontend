let selectedImage = null;
let videoStream = null;

document.getElementById("imageUpload").addEventListener("change", e => {
    selectedImage = e.target.files[0];
});

function openCamera() {
    const video = document.getElementById("video");
    const captureBtn = document.getElementById("captureBtn");

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            videoStream = stream;
            video.srcObject = stream;
            video.style.display = "block";
            captureBtn.style.display = "block";
        })
        .catch(() => {
            alert("Camera access denied");
        });
}

function capturePhoto() {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext("2d").drawImage(video, 0, 0);

    canvas.toBlob(blob => {
        selectedImage = new File([blob], "captured.jpg", { type: "image/jpeg" });
    });

    // Stop camera
    videoStream.getTracks().forEach(track => track.stop());
    video.style.display = "none";
}

function analyzeDisease() {

    if (!selectedImage) {
        alert("Please upload or capture an image");
        return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    // BACKEND API (placeholder)
    fetch("/api/disease/analyze", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => showResult(data))
    .catch(() => {
        // Demo response (for now)
        showResult({
            disease: "Leaf Blight",
            treatment: [
                "Neem oil spray (3%)",
                "Cow urine + buttermilk spray",
                "Remove infected leaves"
            ]
        });
    });
}
function showResult(data) {
    document.getElementById("result").innerHTML = `
        <div class="card">
            <h3>🧪 Detected Disease</h3>
            <p><b>${data.disease}</b></p>

            <h4>🌿 Organic Treatment</h4>
            <ul>
                ${data.treatment.map(t => `<li>${t}</li>`).join("")}
            </ul>

            <!-- NEW BUTTON -->
            <div style="text-align:center; margin-top:25px;">
                <a href="videos.html" class="btn-primary">
                    🎥 Watch Tutorials
                </a>
            </div>
        </div>
    `;
}

