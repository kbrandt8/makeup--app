import Product from "@/components/product";
import { ProductType } from "@/utils/dataTypes";
import Image from "next/image";
import Link from "next/link";
async function getData(product:string) {


    const url = `https://makeup.p.rapidapi.com/products.json?product_type=${product}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '626e7f7ce3msh61a91afbee87b93p1c05bfjsn99341dc69557',
        'X-RapidAPI-Host': 'makeup.p.rapidapi.com'
      }
    };
   const getMakeup =  await fetch(url,options).then(response => response.json())

   return getMakeup
  

}

export default async function Page({ params }: { params: { product: string } }) {
const {product} = params
const data = await getData(product)
const allMakeup = await data.filter((item:ProductType)=>item.price !== '0.0')
const makeup = allMakeup.map((item:ProductType)=>
<div key={item.id}><Product data={item}/></div>
)

    return (<main>
      <ul>

        </ul>
<h1>{product}</h1>
      <ul>{makeup}</ul>
    
    </main>)
  }


  