import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../../context/AppContext';
import estilos from '../../styles/Sala.module.css';
import SOCKET from '../../services/socket';

const Sala = () => {
  const { nome } = useContext(AppContext);
  const router = useRouter()
  const { categoria } = router.query

  SOCKET.on('connection', () => {
    console.log(`I'm connected with the back-end`);
  });

  SOCKET.emit('sala_selecionada', { nome, sala: categoria });

  return (
    <div className={ estilos.paginaSala }>
      <header className="text-center p-2 bg-light text-primary">
        <h1>Chat</h1>
      </header>

      <main className={ estilos.mainContainer }>
        <section>
          <form>
            <textarea rows={3} autoFocus placeholder="Digite aqui" />
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
