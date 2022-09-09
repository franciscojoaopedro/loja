import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../db/database.json";
const listProducts=require("../../../db/database.json")

export default function handle(requisao:NextApiRequest,resposonse:NextApiResponse){
       const {id}=requisao.query
       const product=products.find((prod)=>prod.id===Number(id))
       resposonse.status(200).json(product)
}