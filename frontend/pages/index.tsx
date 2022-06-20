import { EventHandler, FormEvent, FormEventHandler, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter();
  const [sala, setSala] = useState('');
  const [nome, setNome] = useState('');

  const irParaASala = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/salas/${sala}`)
  }

  return (
    <div className={styles.index}>
      <main className="container-fluid d-flex justify-content-center m-5">
        <section className="card w-50">
          <h2 className="card-header text-center p-4"></h2>
          <form className="card-body" onSubmit={ irParaASala }>
            <div className="my-3">
              <input
                className="form-control"
                onChange={ (e) => setNome(e.target.value) }
                placeholder="Digite seu nome"
                type="text"
                value={ nome }
              />
            </div>
            <div className="input-field col s12">
              <select className="form-select my-3" onChange={ (e) => setSala(e.target.value) }>
                <option value="" disabled selected>Escolha uma sala</option>
                <option value="esporte">Esporte</option>
                <option value="estilo-de-vida">Estilo de vida</option>
                <option value="musica">Música</option>
                <option value="programacao">Programação</option>
                <option value="saude">Saúde</option>
              </select>
            </div>

            <div className="d-grid gap-2 my-4">
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
