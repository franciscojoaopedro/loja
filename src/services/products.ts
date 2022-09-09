

export type ProductType={
    id:number
    name:string
    description:string
    price:number
    imageUrl:string
    inStock:number
}

const url=`${process.env.NEXT_PUBLIC_APIURL}`


export const fecthProducts=async () => {
    const products: ProductType[] = await fetch(`${url}/api/products`)
    .then(response=>response.json())
    return products
}
export const fecthProduct=async (id:string | number) => {
    const product:ProductType= await fetch(`${url}/api/products/${id}`)
    .then(response=>response.json())
    return product
}