import Product from "@/components/productPage"
import { getProductPage } from "@/utils/productActions"

export default async function Page({params}:{
    params: { id: string }
}){
    const {id} = params
    const product = await getProductPage(id)
  
    return(
        <Product data={product} />
    )
}