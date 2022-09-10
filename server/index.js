const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = 5000;

// クライアントと通信
io.on("connection", (socket) => {
  console.log("クライアントと接続しました");

  socket.on("disconnect", () => {
    console.log("クライアントと接続が切れました");
  });
});

server.listen(PORT, () => {
  console.log(`server is runnning on ${PORT}`);
});
