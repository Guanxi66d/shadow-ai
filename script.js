function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = input.value.trim();
  if (!userMessage) return;

  // 显示用户消息
  const userDiv = document.createElement("div");
  userDiv.className = "user";
  userDiv.textContent = "你：" + userMessage;
  chatBox.appendChild(userDiv);

  // 简单回应（模拟 AI）
  const botDiv = document.createElement("div");
  botDiv.className = "bot";
  botDiv.textContent = "影子AI：" + getBotReply(userMessage);
  chatBox.appendChild(botDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  if (message.includes("你好")) return "你好呀，有什么可以帮你？";
  if (message.includes("你是谁")) return "我是你的影子 AI 助手。";
  return "我还在学习中，请多提问我！";
}
