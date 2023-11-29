import Image from 'next/image'
import styles from './page.module.css'
import Home from '@/components/homePage'
import { cookies } from 'next/headers'
import { getRandomProduct, getRandomBrand } from '@/utils/productActions'
import Product from '@/components/product'
import { ProductType } from '@/utils/dataTypes'
import Link from 'next/link'
export default async function Page() {
  const cookieStore = cookies()
  const cartId = cookieStore.get('cartId')?.value
  const product = await getRandomProduct()
  const brand = await getRandomBrand()
  const makeup = product.map((item:ProductType) =>
  <div key={item.id}><Product data={item} /></div>
)
const makeup2 = brand.map((item:ProductType) =>
<div key={item.id}><Product data={item} /></div>
)

  return (
<main>
<h1><Link href={`/brands/${brand[0].brand}`}> Top Rated Products from {brand[0].brand}</Link></h1>
 {makeup2}
 <h1><Link href={`/products/${product[0].product_type}`}>Top Rated {product[0].product_type.replace("_"," ")}</Link></h1> 
{makeup}
  <Home/>
</main>


  )
}
