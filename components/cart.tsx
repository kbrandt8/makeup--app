import { cookies } from 'next/headers'
import { startCart, getCart, getTotal } from '@/utils/cartActions'
import Product from './product'
import CartItem from './cartItem'
import CartFrontEnd from './cartFrontEnd'
import { CartItemType } from '@/utils/dataTypes'
export default async function Cart() {
    const cookiesList = cookies()
    const hasCart = cookiesList.has('cartId')
    const cartId = cookiesList.get('cartId')?.value || ""

    if (hasCart) {
        const cart = await getCart(cartId)
        const { items } = await cart

        const total = await getTotal(items)
        return (<CartFrontEnd data={cart} total={total} />)
    } else {
        return (<></>)

    }
}