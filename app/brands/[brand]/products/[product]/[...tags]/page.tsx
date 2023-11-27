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
const data = await getData(product,brand,tags)

return(
    <main>
        <h1>{brand}</h1>
        <h1>{product}</h1>
        <h1>{tags}</h1>
        <ul>{data.length > 0 ? data : <h1>None Found</h1>} </ul>

    </main>
)
}