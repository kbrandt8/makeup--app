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
import Card from 'react-bootstrap/Card';
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
        <div className="cart-item">
            <h4>{data.name}</h4>
            <h5>{data.brand} </h5>
            <Link
                href={`/productPage/${data.id}`}>
                <Image src={'https:' + data.img_url} alt={data.name} width={200} height={200} className="cart-item-image" />
            </Link>
            {data.product_color &&
            <h6>Color: {data.product_color}</h6>}
            <h5>${fullPrice}</h5>
            <div className="product-info">
                {data?.quantity &&

                    <ButtonGroup aria-label="Change Quantity">
                        <Button onClick={() => { cartId && changeQuantity(cartId, data, false); newQuantity(data, false); router.refresh() }}> - </Button>
                        <Button>{data.quantity}</Button>
                        <Button onClick={() => { cartId && changeQuantity(cartId, data, true); newQuantity(data, true); router.refresh() }}>+</Button>
                    </ButtonGroup>
                }
                <br /><Button onClick={() => { cartId && removeFromCart(cartId, data); deleteItem(data); router.refresh() }}>Remove From Cart</Button>
            </div>
        </div >
    )
}