import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Container } from "reactstrap";
import Header from '../src/components/Header';
import ProductList from "../src/components/ProductList";
import { fecthProducts, ProductType } from '../src/services/products';




export const getStaticProps:GetStaticProps= async()=>{
    const products=await fecthProducts()
    return{props:{products}}
}


const Products:NextPage=(props:{
    childrem?:ReactNode
    products?:ProductType[]
})=>{
    return(
        <>
        <Head>
            <title>Nossos Produtos</title>
            <meta name='description' content='Conheça os nossos produtos' />
      <link rel="stylesheet" href="/public/favicon.ico" />
        </Head>


        <Header/>
         
         <Container className="mb-6">
            <h1 className="my-5">
                Nossos Produtos
            </h1>
            {
                <ProductList products={props.products!}
                />
            }
         </Container>

        </>
    )
}

export default Products;