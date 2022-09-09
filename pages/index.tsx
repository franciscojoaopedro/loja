import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Njila Ai Tech J&F</title>
      <meta name='descriptio' content='Njila Ai Tech' />
      <link rel="stylesheet" href="/public/favicon.ico" />
    </Head>

    <main>
      <h1>Seja bem vindo <a href="">Njila Ai Tech</a></h1>

      <p>
        Somos uma loja online
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iusto.
      </p>
    </main>
    </>  
  )
}

export default Home
