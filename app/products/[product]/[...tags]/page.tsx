import Product from "@/components/product";
import { ProductType } from "@/utils/dataTypes";
import {getData} from '@/utils/productActions'
import ProductNav from "@/components/productNav";
export default async function Page({ params }: { params: { product: string, tags:[string] } }) {
  const { product,tags } = params
  tags.shift()
  const data = await getData(product,false,tags)


  return (<main>
    <ProductNav product={true} brand={false} tags={false} />
    <ul>

    </ul>
    <h1>{product}</h1>
    <ul>{data.length > 0 ? data : <h1>None Found</h1>} </ul>


  </main>)
}


