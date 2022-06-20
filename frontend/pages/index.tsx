import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <header className="bg-light text-dark text-center p-2">
        <h1 className="h3">Chat</h1>
      </header>

      <main className="container-fluid d-flex justify-content-center m-5">
        <section className="card w-50">
          <h2 className="card-header text-center p-4"></h2>
          <form className="card-body">
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Digite seu nome"
                type="text"
              />
            </div>
            <div className="input-field col s12">
              <select className="form-select">
                <option value="" disabled selected>Escolha uma sala</option>
                <option>Esporte</option>
                <option>Estilo de vida</option>
                <option>Música</option>
                <option>Programação</option>
                <option>Saúde</option>
              </select>
            </div>

            <div className="d-grid gap-2 my-2">
              <button className="btn btn-primary" type="submit" name="action">
                Entrar
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Home
