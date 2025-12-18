const videos = {
    kannada: [
        {
            title: "ಸಾವಯವ ಕೃಷಿ ವಿಧಾನಗಳು",
            url: "https://www.youtube.com/watch?v=Zk1ZVjK4Q0Q"
        },
        {
            title: "ನೆಗ್ಗಿಲು ಮತ್ತು ಜೈವ ಗೊಬ್ಬರ",
            url: "https://www.youtube.com/watch?v=QfQ3gF6XjRw"
        }
    ],
    telugu: [
        {
            title: "సేంద్రీయ వ్యవసాయం పద్ధతులు",
            url: "https://www.youtube.com/watch?v=1c7JkWkQFJg"
        },
        {
            title: "వర్మీ కంపోస్ట్ తయారీ",
            url: "https://www.youtube.com/watch?v=K8Z9rX8qYhM"
        }
    ],
    hindi: [
        {
            title: "जैविक खेती कैसे करें",
            url: "https://www.youtube.com/watch?v=V9m6jzUjHnE"
        },
        {
            title: "नीम कीटनाशक बनाने की विधि",
            url: "https://www.youtube.com/watch?v=6j6Z6WJw8Xw"
        }
    ],
    english: [
        {
            title: "Organic Farming Basics",
            url: "https://www.youtube.com/watch?v=whEJ9G6Z1tU"
        },
        {
            title: "Natural Pest Control Methods",
            url: "https://www.youtube.com/watch?v=J4SaSfnHK3I"
        }
    ]
};

function loadVideos() {

    const lang = document.getElementById("languageSelect").value;
    const container = document.getElementById("videoContainer");

    container.innerHTML = "";

    if (!lang || !videos[lang]) {
        return;
    }

    videos[lang].forEach(v => {
        container.innerHTML += `
            <div class="card">
                <h3>${v.title}</h3>
                <a href="${v.url}" target="_blank" class="btn-primary">
                    ▶ Watch on YouTube
                </a>
            </div>
        `;
    });
}
