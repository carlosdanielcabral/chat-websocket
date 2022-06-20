import React from 'react'
import estilos from '../../styles/Sala.module.css';

const Sala = () => {
  return (
    <div className={ estilos.paginaSala }>
      <header className="text-center p-2 bg-light text-primary">
        <h1>Chat</h1>
      </header>

      <main className={ estilos.mainContainer }>
        <section>
          <form>
            <textarea rows={3} />
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
