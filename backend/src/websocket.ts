import { io } from "./server";

interface IDado {
  socketId: string,
  nome: string,
  sala: string
}

interface IMensagem {
  sala: string,
  usuario: string,
  texto: string,
  createdAt: Date
}

const usuarios: IDado[] = [];
const mensagens: IMensagem[] = [];

io.on('connection', (socket) => {

  socket.emit('connection', null);

  socket.on('sala_selecionada', (dados) => {
    const { nome, sala } = dados;

    socket.join(sala);

    const usuarioNaSala = usuarios.find((usuario) => (
      usuario.nome === nome && usuario.sala === sala));

    if (usuarioNaSala) usuarioNaSala.socketId === socket.id;
    else usuarios.push({
      socketId: socket.id,
      nome,
      sala
    });
  });

  socket.on('texto', (dados) => {
    const usuario = usuarios.find((dadosDoUsuario) => dadosDoUsuario.socketId === socket.id);
    
    if (usuario) {
      const { sala, nome } = usuario;

      const mensagem: IMensagem = { sala, usuario: nome, texto: dados, createdAt: new Date() };

      mensagens.push(mensagem);

      io.to(sala).emit('mensagem', mensagem);
    }
  });
});
