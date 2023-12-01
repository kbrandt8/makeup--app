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


  return (<main>
    <ProductNav  />


    <h1>{brand.replace("%20", " ")}  </h1>
    <h1>{product.replace("_", " ")} </h1>
    <ul>{data.length > 0 ? data : <h1>None Found</h1>} </ul>

  </main>)
}




