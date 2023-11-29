import { getData } from '@/utils/productActions'
import ProductNav from "@/components/productNav";
export default async function Page({ params }: { params: { product: string } }) {
  const { product } = params
  const data = await getData(product, false, false)

  return (<main>
    <ProductNav/>
    <ul>

    </ul>
    <h1>{product.replace("_", " ")} </h1>
    <ul>{data.length > 0 ? data : <h1>None Found</h1>} </ul>


  </main>)
}


