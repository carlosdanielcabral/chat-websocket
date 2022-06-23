import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../../context/AppContext';
import estilos from '../../styles/Sala.module.css';
import SOCKET from '../../services/socket';
import Mensagem from '../../components/Mensagem/Mensagem';

interface IMensagem {
  sala: string,
  usuario: string,
  texto: string,
  createdAt: Date
}

const Sala = () => {
  const { nome } = useContext(AppContext);
  const router = useRouter()
  const [texto, setTexto] = useState('');
  const [mensagens, setMensagens] = useState<IMensagem[]>([]);
  const { categoria } = router.query
  
  SOCKET.on('connection', () => console.log(`I'm connected with the back-end`));
  SOCKET.emit('sala_selecionada', { nome, sala: categoria });
  SOCKET.on('mensagem', (dados) => setMensagens([...mensagens, dados]));
  
  const enviarTexto = (e: FormEvent) => {
    e.preventDefault();
    SOCKET.emit('texto', texto)
    setTexto('');
  }

  return (
    <div className={ estilos.paginaSala }>
      <header className="text-center p-2 bg-light text-primary">
        <h1>Chat</h1>
      </header>

      <main className={ estilos.mainContainer }>
        <section>
          {
            mensagens.length > 0 && (
              mensagens.map((mensagem, index) => (
                <Mensagem dados={mensagem} key={`mensagem-${index + 1}`} />))
            )
          }
          <form onSubmit={enviarTexto}>
            <textarea
              autoFocus
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Digite aqui" 
              rows={3}
              value={texto}
            />
            <button
              type="submit"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Sala;
