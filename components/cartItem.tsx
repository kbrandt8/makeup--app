'use client'
import { addToCart, changeQuantity, removeFromCart } from "@/utils/cartActions";
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
    const { cartId } = useCartContext()
    const initialPrice = parseFloat(data.price) * data.quantity
    const fullPrice = initialPrice.toFixed(2)


    return (
        <div >
            <h4>{data.brand}:{data.name}</h4>
            <Image src={'https:' + data.img_url} alt={data.name} width={100} height={100} />

            <h5><Link href={`${data.brand}/${data.product_type}`}>{data.product_type}</Link></h5>
            <h6>{data.product_color}</h6>
            <h5>${fullPrice}</h5>
            {data?.quantity &&
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="Second group">
                        <Button onClick={() => {changeQuantity(cartId, data, data.quantity,false);router.refresh()}}> - </Button>
                        <Button>{data.quantity}</Button>
                        <Button onClick={() => {changeQuantity(cartId, data, data.quantity,true);router.refresh()}}>+</Button>
                    </ButtonGroup></ButtonToolbar>
            }
            <Button onClick={() => { removeFromCart(cartId, data); router.refresh() }}>Remove From Cart</Button>

        </div>
    )
}