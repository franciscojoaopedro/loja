import {NextPage} from "next";
import Head from "next/head";

const Products:NextPage=()=>{
    return(
        <>
        <Head>
            <title>Nossos Produtos</title>
            <meta name='description' content='Conheça os nossos produtos' />
      <link rel="stylesheet" href="/public/favicon.ico" />
        </Head>
        <h1>Nossos Produtos</h1>
        </>
    )
}

export default Products;