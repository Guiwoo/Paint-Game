import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import morgan from "morgan";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(morgan("dev"));

app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`💚Server on: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("newMessage", ({ message }) =>
    socket.broadcast.emit("messageNotification", {
      message,
      nickname: socket.nickname || "Unknown",
    })
  );
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
