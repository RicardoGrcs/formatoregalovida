import Head from 'next/head'
import styles from '../styles/Home.module.css'
import General from './components/General'
import Pruebas from './components/Pruebas'
import Seccion from './components/Seccion'
import Seccion1 from './components/Seccion1'
import Seccion2 from './components/Seccion2'

export default function Home() {

  let a = false;

  let edadGest = 1;


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/bootstrap.css" />
      </Head>

      <main className="container-xxl">
        <h1 className="display-3 text-center">FORMATO PARA SEGUIMIENTO PROGRAMA REGALO DE VIDA</h1>
        <h2 className="text-center">MANUAL PROGRAMA DE ATENCIÓN INTEGRAL AL BINOMIO MADRE E HIJO. REGALO DE VIDA</h2>
        <form method="POST">
          <General></General>
          <Seccion></Seccion>
          <Seccion1></Seccion1>
          <Seccion2></Seccion2>
          <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
