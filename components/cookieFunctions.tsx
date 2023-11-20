import { cookies } from 'next/headers'
import { startCart,getCart } from '@/utils/cartActions'
import Product from './product'
import CartItem from './cartItem'
import { CartItemType } from '@/utils/dataTypes'
export default async function CookieFunctions(){
    const cookiesList = cookies() 

    const loggedIn = cookiesList.has('cookieConsent')
    const hasCart = cookiesList.has('cartId')
    const cartId = cookiesList.get('cartId')?.value || ""
    if(cartId){
    const cart = await getCart(cartId)
    const {items} = cart
    const allItems = items.map((item:CartItemType)=><div key={item.id}>
        <CartItem data={item}/>
    </div>)

    return(<main>
    {cartId}
    {allItems}
    </main>)
    }else{
        return(<></>)

    }

 


}