import Image from 'next/image'
import styles from './page.module.css'
import Home from '@/components/homePage'
import { cookies } from 'next/headers'
import { getRandomProduct, getData, getRandomBrand, getRandomTag } from '@/utils/productActions'
import Product from '@/components/productPage'
import { ProductType } from '@/utils/dataTypes'
import Link from 'next/link'
import { getCart } from '@/utils/cartActions'
export default async function Page() {
  const cookieStore = cookies()
  const cartId = cookieStore.get('cartId')?.value
  const cart = await getCart(cartId)

  return (
    <>
      <Home />
    </>
  )
}
