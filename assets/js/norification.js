const body = document.querySelector("body");

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} joined`, "rgb(0, 122, 255)");
};

export const handleDisconnect = ({ nickname }) => {
  fireNotification(`${nickname} left!`, "rgb(255, 149, 0)");
};
