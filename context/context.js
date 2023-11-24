'use client'
import useSWR from 'swr'
import { createContext, useContext, useState, useEffect } from 'react';
import cookie from "js-cookie";
import { changeQuantity, startCart } from '@/utils/cartActions';
const CartContext = createContext();
export function CartProvider({ children }) {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    const loggedIn = cookie.get('cookieConsent') === 'accepted' ? true : false
    const cartId = cookie.get('cartId')
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const getCart = `http://localhost:3000/api/cartCookies/${cartId}`
    const { data, error, isLoading } = useSWR(getCart, fetcher)

    useEffect(() => {
        if (data) {
            if (data.items) {
                setItems(data.items)
                setTotal(getTotal(data.items))
            }
        }
    }, [data])
    useEffect(() => {
        const total = getTotal(items)
        setTotal(total)
    }, [total, items])


    function getTotal(items) {
        const itemTotal = items.map(item => parseFloat(item.price) * item.quantity)
        const total = itemTotal.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)
        return total
    }

    function deleteItem(item) {
        const newItems = items.filter(product => product !== item)
        setItems(newItems)
    }

    function newQuantity(item, increment) {
        let { quantity } = item
            if (increment) {
                quantity += 1
            } else {
                quantity -= 1
                if (quantity <= 0) {
                    deleteItem(item)
                    const total = getTotal(items)
                    setTotal(total)
                }
            }

            item.quantity = quantity
            const total = getTotal(items)
            setTotal(total)

    }
    function addItem(item) {
        if (!items.includes(item)) {
            setItems([...items, item])
        } else {
            changeQuantity(item, true)
        }
    }

    return (
        <CartContext.Provider value={{
            loggedIn,
            cartId,
            items,
            total,
            addItem,
            deleteItem,
            newQuantity,
            getTotal


        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext)
}