function toggleChat() {
    const chat = document.getElementById("chatbot");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (text === "") return;

    addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
        botReply(text);
    }, 600);
}

function addMessage(message, sender) {
    const chatBody = document.getElementById("chat-body");
    const div = document.createElement("div");
    div.className = sender;
    div.innerText = message;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(msg) {
    msg = msg.toLowerCase();
    let reply = "Sorry, I can help with crops, disease, loans or videos.";

    if (msg.includes("crop")) {
        reply = "🌱 Based on your location, Rice, Cotton and Millets are suitable crops.";
    } 
    else if (msg.includes("disease")) {
        reply = "🦠 Upload a plant image in Disease Detection to get organic treatment.";
    }
    else if (msg.includes("loan") || msg.includes("scheme")) {
        reply = "💰 Government schemes: Kisan Credit Card, PM Fasal Bima Yojana, PM Mudra.";
    }
    else if (msg.includes("video")) {
        reply = "🎥 Visit Organic Videos to learn farming in Kannada, Telugu, Hindi & English.";
    }
    else if (msg.includes("hi") || msg.includes("hello")) {
        reply = "👋 Hello! I am KrishiMitra Bot. How can I help you?";
    }

    addMessage(reply, "bot");
}
