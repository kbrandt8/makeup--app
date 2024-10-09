'use client'
import useSWR from 'swr'
import { createContext, useContext, useState, useEffect } from 'react';
import cookie from "js-cookie";
const URL = process.env.NEXT_PUBLIC_URL
const CartContext = createContext();
export function CartProvider({ children }) {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    const [startCart, setStartCart] = useState(true)
    const loggedIn = cookie.get('cookieConsent') === 'accepted' ? true : false
    const cartId = cookie.get('cartId')
    const cartNumber = getTotalItems(items)

    useEffect(() => {
        const total = getTotal(items)
        setTotal(total)
    }, [total, items])

    useEffect(() => {
        if (startCart) {
            const allItems = JSON.parse(sessionStorage.getItem("items"))
            if (allItems !== null) {
                setItems(allItems)
            }
            setStartCart(false)
        }
    }, [startCart])

    function updateSession(items) {
        sessionStorage.setItem("items", JSON.stringify(items))
    }

    function getTotal(items) {
        const itemTotal = items.map(item => parseFloat(item.price) * item.quantity)
        const total = itemTotal.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)
        return total
    }
    function getTotalItems(items) {
        const allItems = items.map(item => item.quantity)
        const total = allItems.reduce((a, c) => {
            return a + c
        }, 0)
        return total
    }

    function deleteItem(item) {
        const newItems = items.filter(product => product !== item)
        setItems(newItems)
        updateSession(newItems)
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
        updateSession(items)

    }

    function addItem(item) {
        if (!items.some(cartItem => cartItem.id === item.id)) {
            const newItems = [...items, item]
            setItems(newItems)
            updateSession(newItems)

        } else {
            newQuantity(item, true)
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
            getTotal,
            cartNumber


        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext)
}