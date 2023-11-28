import Product from "@/components/product";
import { ProductType } from "@/utils/dataTypes";
import {getData} from '@/utils/productActions'
import ProductNav from "@/components/productNav";

export default async function Page({ params }: { params: { brand: string } }) {
const {brand} = params
const data = await getData(false,brand)


    return (<main>
    <ProductNav/>


<h1>{brand.replace("%20"," ")}</h1>
<ul>{data.length > 0 ? data : <h1>None Found</h1>} </ul>

    
    </main>)
  }


  