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


        <h1>{brand.replace("%20", " ")}</h1>
        <ul>{data.length > 0 ? makeup : <h1>None Found</h1>} </ul>



    </main>)
}


