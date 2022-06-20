import { io } from "./server";

io.on('connection', socket => {
  console.log(socket.id);
  socket.emit('connection', null);
});
