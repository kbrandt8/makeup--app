import { getData } from '@/utils/productActions'
import ProductNav from "@/components/productNav";
import Product from '@/components/product2';
import { ProductType } from '@/utils/dataTypes';
export default async function Page({ searchParams }: { 
  searchParams?:{tags:[string]}
 }) {
  const tags = searchParams?.tags?.length  ? searchParams : false
  const data = await getData(false, false, tags)
  const makeup = data.map((item:ProductType) =>
  <div key={item.id}><Product data={item} /></div>
)

  return (<main>
    <ProductNav/>
    <ul>

    </ul>

    <ul>{data.length > 0 ? makeup : <h1>None Found</h1>} </ul>


  </main>)
}