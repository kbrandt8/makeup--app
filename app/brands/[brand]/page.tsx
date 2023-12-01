import Product from "@/components/product";
import { ProductType } from "@/utils/dataTypes";
import { getData } from '@/utils/productActions'
import ProductNav from "@/components/productNav";

export default async function Page({ params, searchParams }: {
    params: { brand: string }
    searchParams?: { tags: [string] }
}) {
    const tags = searchParams?.tags?.length ? searchParams : false
    const { brand } = params
    const data = await getData(false, brand, tags)
    const makeup = data.map((item:ProductType) =>
    <div key={item.id}><Product data={item} /></div>
  )
 

    return (<main>
        <ProductNav />

{data.length > 0 &&
        <h1>All {brand.replace("%20", " ")} Products </h1>}
        <ul 
    className="products"
    >
      {data.length > 0 ? 
      makeup : 
      <h1>No items of that description were found.</h1>} 
      
      </ul>



    </main>)
}


