'use client'
import { changeQuantity, removeFromCart } from "@/utils/cartActions";
import { useState, useEffect } from "react";
import { useCartContext } from "@/context/context";
import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { CartItemType } from "@/utils/dataTypes";
export default function CartItem({ data }: {
    data: CartItemType
}) {
    const router = useRouter()
    const {
        cartId,
        deleteItem,
        newQuantity,
} = useCartContext()
    const initialPrice = parseFloat(data.price) * data.quantity
    const fullPrice = initialPrice.toFixed(2)
    return (
        <div className="cartItem">
            <h4>{data.brand}:{data.name}</h4>
            <Image src={'https:' + data.img_url} alt={data.name} width={100} height={100} />

            <h5><Link href={`${data.brand}/${data.product_type}`}>{data.product_type}</Link></h5>
            <h6>{data.product_color}</h6>
            <h5>${fullPrice}</h5>

            {data?.quantity &&
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="Second group">
                        <Button onClick={() => {cartId &&changeQuantity(cartId, data,false);newQuantity(data,false);router.refresh()}}> - </Button>
                        <Button>{data.quantity}</Button>
                        <Button onClick={() => {cartId &&changeQuantity(cartId, data,true);newQuantity(data,true);router.refresh()}}>+</Button>
                    </ButtonGroup></ButtonToolbar>
            }
            <Button onClick={() => {cartId &&removeFromCart(cartId,data); deleteItem(data); router.refresh() }}>Remove From Cart</Button>

        </div>
    )
}