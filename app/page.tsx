import Image from 'next/image'
import styles from './page.module.css'
import Home from '@/components/homePage'
import { cookies } from 'next/headers'
import { getRandomProduct, getData, getRandomBrand } from '@/utils/productActions'
import Product from '@/components/product'
import { ProductType } from '@/utils/dataTypes'
import Link from 'next/link'
export default async function Page() {
  const cookieStore = cookies()
  const cartId = cookieStore.get('cartId')?.value


  return (
    <>

      <Home />
    </>
  )
}
