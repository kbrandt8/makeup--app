'use client'
import useSWR from 'swr'
import { createContext, useContext, useState,useEffect } from 'react';
import cookie from "js-cookie";
import { startCart } from '@/utils/cartActions';
const CartContext = createContext();
export function CartProvider({ children }) {
const [cartInfo,setCartInfo] = useState({})
const loggedIn = cookie.get('cookieConsent') === 'accepted'? true:false
const cartId= cookie.get('cartId')  
const fetcher = (url) => fetch(url).then((res) => res.json());
const getCart = `http://localhost:3000/api/cartCookies/${cartId}`


const { data, error, isLoading } =useSWR(getCart,fetcher)


    return (
        <CartContext.Provider value={{  
            loggedIn,
            cartId
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext)
}