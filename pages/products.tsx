import {NextPage} from "next";
import Head from "next/head";
import Header from '../src/components/Header';

const Products:NextPage=()=>{
    return(
        <>
        <Head>
            <title>Nossos Produtos</title>
            <meta name='description' content='Conheça os nossos produtos' />
      <link rel="stylesheet" href="/public/favicon.ico" />
        </Head>
        <Header/>
        <h1>Nossos Produtos</h1>
        </>
    )
}

export default Products;