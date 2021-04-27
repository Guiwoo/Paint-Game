import { handleNewMessage } from "./chat";
import { handleDisconnect, handleNewUser } from "./norification";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = (aSocket) => (socket = aSocket);

export const initSockets = (aSocket) => {
  const { events } = window;
  updateSocket(aSocket);
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnected, handleDisconnect);
  aSocket.on(events.newMessage, handleNewMessage);
};