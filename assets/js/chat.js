import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const sendMessage = document.getElementById("jsSendMessage");

const appendMessage = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="author ${nickname ? "out" : "self"}">${
    nickname ? nickname : "You"
  }:</span> ${text}
    `;
  messages.appendChild(li);
};

const handleSendMessage = (event) => {
  event.preventDefault();
  const input = sendMessage.querySelector("input");
  const { value } = input;
  getSocket().emit(window.events.sendMessage, { message: value });
  input.value = "";
  appendMessage(value);
};

export const handleNewMessage = ({ message, nickname }) =>
  appendMessage(message, nickname);

if (sendMessage) {
  sendMessage.addEventListener("submit", handleSendMessage);
}

export const disalbeChat = () => (sendMessage.style.display = "none");
export const enableChat = () => (sendMessage.style.display = "flex");
