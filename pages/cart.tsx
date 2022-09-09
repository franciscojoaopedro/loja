import {NextPage} from "next";
import Head from "next/head";

const Cart:NextPage=()=>{
    return(
         <>
        
        <Head>
        <title>Produto</title>
        <meta name='description' content='Meu carrinho de compra'/>
        <link rel="stylesheet" href="/public/favicon.ico" />
        </Head>

        <h1>
        Carrinho
        </h1>
        </>
     
    )
}

export default Cart;