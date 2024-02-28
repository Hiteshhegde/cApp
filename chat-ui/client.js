// client.js

const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", function (event) {
  console.log("Connected to server");
});

socket.addEventListener("message", function (event) {
  //   console.log("Message from server:", event.data);
  event.data.text().then(function (text) {
    console.log("Message from server:", text);
    appendMessage(text);
    // Now 'text' contains the string representation of the message
    // Do further processing as needed
  });
});

document.getElementById("send-button").addEventListener("click", function () {
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;
  if (message.trim() !== "") {
    socket.send(message);
    appendMessage("You: " + message);
    messageInput.value = "";
  }
});

function appendMessage(message) {
  const chatMessages = document.getElementById("chat-messages");
  const messageElement = document.createElement("div");
  messageElement.textContent = `${message}`;
  chatMessages.appendChild(messageElement);
}
