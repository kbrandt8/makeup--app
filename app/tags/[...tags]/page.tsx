import { getData } from "@/utils/productActions"
import Product from "@/components/productPage"
import { ProductType } from "@/utils/dataTypes"
import ProductNav from "@/components/productNav"
export default async function Page({params}:{params:{
product:string,
brand:string,
tags:[string]
}}){
const {product,brand,tags} = params
const data = await getData(product,brand,tags)
const tagsName  = tags.map(tag=>tag.replace("%20"," ") + " ")

return(
    <main>
      <ProductNav />
        <h1>{brand}</h1>
        <h1>{product}</h1>
        <h1>{tagsName}</h1>
        <ul>{data.length > 0 ? data : <h1>None Found</h1>} </ul>
    </main>
)
}