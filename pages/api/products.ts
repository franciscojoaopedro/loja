import { NextApiRequest, NextApiResponse } from "next";
import products from "../../db/database.json";

export default function handle(requisao:NextApiRequest,resposonse:NextApiResponse){
       resposonse.status(200).json(products) 
}