import { io } from "./server";

interface IDados {
  socketId: string,
  nome: string,
  sala: string
}

const usuarios: IDados[] = [];

io.on('connection', (socket) => {
  socket.emit('connection', null);
  socket.on('sala_selecionada', (dados) => {
    const { nome, sala } = dados;

    socket.join(sala);

    usuarios.push({
      socketId: socket.id,
      nome,
      sala
    });
  });
});
