import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/utils/dataTypes";
async function getData(product:string,brand:string) {


  const url = `https://makeup.p.rapidapi.com/products.json?brand=${brand}&product_type=${product}`;
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

export default async function Page({ params }:{
  params:{brand:string,product:string}
}) {
const {product,brand} = params
const data = await getData(product,brand)

const makeup = data.map((item:ProductType)=><li key={item.id}>
<h5>{item.brand}:{item.name}</h5>
<Image src={'https:' +item.api_featured_image} alt={item.name} width={100} height={100} />

<ul> {item.product_colors.map(color=><li key={color.hex_value}>
  {color.colour_name}:{color.hex_value}
</li>)} </ul>
</li>)


    return (<div>
<h1>{brand}  {product}</h1>
      <ul>{makeup} </ul>
    
    </div>)
  }




  