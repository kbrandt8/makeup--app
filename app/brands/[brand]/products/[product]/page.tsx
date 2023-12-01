import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/utils/dataTypes";
import { getData } from '@/utils/productActions'
import ProductNav from "@/components/productNav";
import Product from "@/components/product";

export default async function Page({ params,searchParams }: {
  params: { brand: string, product: string }
  searchParams?: { tags: [string] }
}) {    
  const tags = searchParams?.tags?.length ? searchParams : false
  const { product, brand } = params
  const data = await getData(product, brand,tags)
  const makeup =data.map((item:ProductType) =>
  <div key={item.id}><Product data={item} /></div>
  )


  return (<main>
    <ProductNav  />

{data.length > 0 &&
    <h1>{brand.replace("%20", " ")} {product.replace("_", " ")}  </h1>}

    <ul 
    className="products"
    >
      {data.length > 0 ? 
      makeup : 
      <h1>No items of that description were found.</h1>} 
      
      </ul>

  </main>)
}




