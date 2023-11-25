'use client'

import { changeQuantity, removeFromCart } from "@/utils/cartActions";
import { useCartContext } from "@/context/context";
import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { CartItemType } from "@/utils/dataTypes";
import CartItem from "./cartItem";
export default function Cart() {
    const {
        cartId,
        deleteItem,
        newQuantity,
        total,
        items
    } = useCartContext()

    const allItems = items.map((item: CartItemType) => {
        const initialPrice = parseFloat(item.price) * item.quantity
        const fullPrice = initialPrice.toFixed(2)
        const id = items.indexOf(item)
        return (<div key={id}>
            <CartItem data={item} />
        </div>)
    })
    return (
        <div>

            {allItems}
            <h1>Total: {total.toFixed(2)}</h1>
        </div>
    )
}