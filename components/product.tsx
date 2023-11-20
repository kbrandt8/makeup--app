'use client'
import { addToCart } from "@/utils/cartActions";
import { useCartContext } from "@/context/context";
import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { ProductType } from "@/utils/dataTypes";
export default function Product({ data }: {
    data: ProductType
}) {
    const router = useRouter()
    const { cartId } = useCartContext()
    const [color, setColor] = useState('')
    const [hexCode,setHexCode] = useState('')
    const product = {
        id: data.id,
        brand: data.brand,
        name: data.name,
        price: data.price,
        img_url: data.api_featured_image,
        product_type: data.product_type,
        product_color: color,
        quantity: 1
    }
    const price = parseFloat(data.price).toFixed(2)

    return (
        <div>
            <h4>{data.brand}:{data.name}</h4>
            <Image src={'https:' + data.api_featured_image} alt={data.name} width={100} height={100} />
            <h5
            style={{color:`${hexCode}`}}
            >{color}</h5>
            <h5><Link href={`${data.brand}/${data.product_type}`}>{data.product_type}</Link></h5>
            {data.product_colors?.map(color =>
                <div 
                key={color.hex_value}
                style={{color:`${color.hex_value}`}}
                    onClick={() => {setColor(color.colour_name);setHexCode(color.hex_value)}}>
                    {color.colour_name}:{color.hex_value}
                </div>)}
            <h5>${price}</h5>
            <Button onClick={() => { addToCart(cartId, product, price); router.refresh() }}>Add To Cart</Button>

        </div>
    )
}