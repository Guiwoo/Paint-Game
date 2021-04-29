import { disalbeChat, enableChat } from "./chat";
import {
  disableCanvas,
  enalbeCanbas,
  hideControls,
  resetCanvas,
  showControls,
} from "./paint";

const board = document.getElementById("jsPboard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotif = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  enableChat();
  setNotif("");
  disableCanvas();
  hideControls();
};
export const handleLeaderNf = ({ word }) => {
  enalbeCanbas();
  showControls();
  disalbeChat();
  notifs.innerText = `You are the painter! paint ${word}`;
};
export const gameEnded = () => {
  setNotif("Game end");
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleStarting = () => setNotif("Game start will sonn");
