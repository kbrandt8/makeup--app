import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/utils/dataTypes";
import { getData } from '@/utils/productActions'
import ProductNav from "@/components/productNav";
import Product from "@/components/product";

export default async function Page({ params }: {
  params: { brand: string, product: string }
}) {
  const { product, brand } = params
  const data = await getData(product, brand)


  return (<main>
    <ProductNav product={true} brand={true} tags={false} />


    <h1>{brand.replace("%20", " ")}  </h1>
    <h1>{product.replace("_", " ")} </h1>
    <ul>{data.length > 0 ? data : <h1>None Found</h1>} </ul>

  </main>)
}




