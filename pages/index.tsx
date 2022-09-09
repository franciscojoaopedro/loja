import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header';
import { Container,Button } from 'reactstrap';
import Link from 'next/link';



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
     <Container className='py-5 text-center'>
      <h1 className='mt-5 display-1'>
        O melhor jeito de comprar o que você ama
      </h1>
      <p className='my-4'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis.
      </p>
      <Link href="/products">
        <Button color="dark" className='px-4 pb-2'>
          Conheça nossos produtos!
        </Button>
      </Link>
     </Container>
    </main>
    </>  
  )
}

export default Home
