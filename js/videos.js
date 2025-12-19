const videos = {
    kannada: [
        {
            title: "ಸಾವಯವ ಕೃಷಿ ವಿಧಾನಗಳು",
            url: "https://www.youtube.com/watch?v=kN6fiN4qYTg&pp=ygUhb3JnYW5pYyBmYXJtaW5nIHZpZGVvcyBpbiBrYW5uYWRh0gcJCU8KAYcqIYzv"
        },
        {
            title: "ನೆಗ್ಗಿಲು ಮತ್ತು ಜೈವ ಗೊಬ್ಬರ",
            url: "https://www.youtube.com/watch?v=OJ-l6XMQ_GQ&pp=ygUhb3JnYW5pYyBmYXJtaW5nIHZpZGVvcyBpbiBrYW5uYWRh"
        }
    ],
    telugu: [
        {
            title: "సేంద్రీయ వ్యవసాయం పద్ధతులు",
            url: "https://www.youtube.com/watch?v=9srySOD_Fyc&list=PLGCi8LsMCCZiGUsEq8OSID1RPjta6XITP&index=1&pp=iAQB"
        },
        {
            title: "వర్మీ కంపోస్ట్ తయారీ",
            url: "https://www.youtube.com/watch?v=VjiV1cA9fro&list=PLGCi8LsMCCZiGUsEq8OSID1RPjta6XITP&index=2&pp=iAQB"
        }
    ],
    hindi: [
        {
            title: "जैविक खेती कैसे करें",
            url: "https://www.youtube.com/watch?v=wougJaN_Ha0&pp=ygUfb3JnYW5pYyBmYXJtaW5nIHZpZGVvcyBpbiBoaW5kadIHCQlPCgGHKiGM7w%3D%3D"
        },
        {
            title: "नीम कीटनाशक बनाने की विधि",
            url: "https://www.youtube.com/watch?v=Ef4b4yI6LBQ&pp=ygUfb3JnYW5pYyBmYXJtaW5nIHZpZGVvcyBpbiBoaW5kadIHCQlPCgGHKiGM7w%3D%3D"
        }
    ],
    english: [
        {
            title: "Organic Farming Basics",
            url: "https://www.youtube.com/watch?v=lRyXlvIJFWI&pp=ygUhb3JnYW5pYyBmYXJtaW5nIHZpZGVvcyBpbiBlbmdsaXNo0gcJCU8KAYcqIYzv"
        },
        {
            title: "Natural Pest Control Methods",
            url: "https://www.youtube.com/watch?v=-K80djZC8y0&pp=ygUfbmF0dXJhbCBwZXN0IGNvbnRyb2wgaW4gZW5nbGlzaA%3D%3D"
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
