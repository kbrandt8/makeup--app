import { getData } from '@/utils/productActions'
import ProductNav from "@/components/productNav";
import Product from '@/components/product';
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
    <ul 
    className="products"
    >
      {data.length > 0 ? 
      makeup : 
      <h1>No items of that description were found.</h1>} 
      
      </ul>


  </main>)
}