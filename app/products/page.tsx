import { getData } from '@/utils/productActions'
import ProductNav from "@/components/productNav";
export default async function Page({ searchParams }: { 
  searchParams?:{tags:[string]}
 }) {
  const tags = searchParams?.tags?.length  ? searchParams : false
  const data = await getData(false, false, tags)

  return (<main>
    <ProductNav/>
    <ul>

    </ul>

    <ul>{data.length > 0 ? data : <h1>None Found</h1>} </ul>


  </main>)
}