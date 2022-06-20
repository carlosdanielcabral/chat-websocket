import socketClient  from 'socket.io-client';

const SERVER = 'http://localhost:3001/'
const SOCKET = socketClient(SERVER);

export default SOCKET;
