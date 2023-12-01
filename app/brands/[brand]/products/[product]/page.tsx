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


    <h1>{brand.replace("%20", " ")}  </h1>
    <h1>{product.replace("_", " ")} </h1>
    <ul>{data.length > 0 ? makeup : <h1>None Found</h1>} </ul>

  </main>)
}




