import styles from './Mensagem.module.css';

interface IMensagem {
  sala: string,
  usuario: string,
  texto: string,
  createdAt: Date
}

interface IProps {
  dados: IMensagem
}

const Mensagem = ({ dados }: IProps) => (
  <div className={styles.mensagem}>
    <div className={styles.usuario}>
      <small>{dados.usuario}</small>
      <small>{(new Date(dados.createdAt)).toLocaleString()}</small>
    </div>

    <div className={styles.texto}>
      <p>{dados.texto}</p>
    </div>
  </div>
)

export default Mensagem;
