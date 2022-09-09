import Image from "next/image";
import  Link  from 'next/link';
import {ProductType} from "../services/products"
import React,{ useState } from 'react';
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import SuccessToast from './SuccessToast';

type ProductCardProps={
    product:ProductType
}

const ProductCard:React.FC<ProductCardProps>=({product})=>{
    const [toastIsOpen,setToasIsOpen]=useState(false)
    const {id,name,imageUrl,price}=product

    return(
        <>
        <Card>
            <Link href={`/products/${id}`}>
            <Image className="card-img-top" src={imageUrl} alt={product.name} height={500} width={600}/>
            </Link>

            <CardBody>
                <Link href={`/products/${id}`}>
                    <h5 className="card-title" style={{cursor:"pointer"}}>
                        {name}
                    </h5>
                </Link>
                <CardSubtitle className="mb-3 text-muted" tag={"h6"}>
                    {price} KZ
                </CardSubtitle>
                <Button 
                color="dark"
                className="pb-2"
                block
                onClick={()=>{
                    setToasIsOpen(true)
                    setTimeout(()=>setToasIsOpen(false),1000 *3)
                }}
                >
                    Adicionar ao Carrinho
                </Button>
            </CardBody>
        </Card>
       <SuccessToast 
       toastIsOpen={toastIsOpen}
       setToasIsOpen={setToasIsOpen}
       />
        </>
    )
}

export default ProductCard;