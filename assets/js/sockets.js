import { handleNewMessage } from "./chat";
import { handleDisconnect, handleNewUser } from "./norification";
import { handleBeganPath, handleFilled, handleStrokedPath } from "./paint";
import {
  gameEnded,
  handleGameStarted,
  handleLeaderNf,
  handlePlayerUpdate,
  handleStarting,
} from "./players";

let socket = null;

export const getSocket = () => socket;

export const initSockets = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.newUser, handleNewUser);
  socket.on(events.disconnected, handleDisconnect);
  socket.on(events.newMessage, handleNewMessage);
  socket.on(events.beganPath, handleBeganPath);
  socket.on(events.strokedPath, handleStrokedPath);
  socket.on(events.filled, handleFilled);
  socket.on(events.playerUpdate, handlePlayerUpdate);
  socket.on(events.gameStarted, handleGameStarted);
  socket.on(events.leaderNf, handleLeaderNf);
  socket.on(events.gameEnded, gameEnded);
  socket.on(events.starting, handleStarting);
};
