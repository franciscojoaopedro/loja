import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header';


const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Njila Ai Tech J&F</title>
      <meta name='descriptio' content='Njila Ai Tech' />
      <link rel="stylesheet" href="/public/favicon.ico" />
    </Head>
    <Header/>

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
