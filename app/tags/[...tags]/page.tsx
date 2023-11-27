import { getData } from "@/utils/productActions"
import Product from "@/components/product"
import { ProductType } from "@/utils/dataTypes"
export default async function Page({params}:{params:{
product:string,
brand:string,
tags:[string]
}}){
const {product,brand,tags} = params
tags.shift()
console.log(tags)
const data = await getData(product,brand,tags)
const allMakeup = await data.filter((item: ProductType) => item.price !== '0.0')
const makeup = allMakeup.map((item: ProductType) =>
  <div key={item.id}><Product data={item} /></div>
)
return(
    <main>
        <h1>{brand}</h1>
        <h1>{product}</h1>
        <h1>{tags}</h1>
        <ul>{makeup}</ul>
    </main>
)
}