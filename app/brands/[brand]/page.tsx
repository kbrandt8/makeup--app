import Product from "@/components/product";
import { ProductType } from "@/utils/dataTypes";
import {getData} from '@/utils/productActions'
import ProductNav from "@/components/productNav";

export default async function Page({ params }: { params: { brand: string } }) {
const {brand} = params
const data = await getData(false,brand)
const allMakeup = await data.filter((item: ProductType) => item.price !== '0.0')
const makeup = allMakeup.map((item: ProductType) =>
  <div key={item.id}><Product data={item} /></div>
)


    return (<main>
    <ProductNav product={false} brand={true} tags={false} />


<h1>{brand.replace("%20"," ")}</h1>
<ul>{makeup.length > 0 ? makeup : <h1>None Found</h1>} </ul>
    
    </main>)
  }


  