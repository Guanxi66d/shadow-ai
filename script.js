
async function sendMessage() {
    const input = document.getElementById("input");
    const chat = document.getElementById("chat");

    const userText = input.value;
    chat.innerHTML += `<div class='user'>你：${userText}</div>`;
    input.value = "";

    const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText })
    });

    const data = await res.json();
    chat.innerHTML += `<div class='ai'>影子AI：${data.reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
}
