'use client'
import { addToCart } from "@/utils/cartActions";
import { useCartContext } from "@/context/context";
import { Button } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { ProductType } from "@/utils/dataTypes";

export default function Product({ data }: {
    data: ProductType
}) {
    const {
        loggedIn,
        cartId,
        addItem,

    } = useCartContext()
    const router = useRouter()
    const [selectedColor, setSelectedColor] = useState('')
    const [hexCode, setHexCode] = useState('')
    const [alert, setAlert] = useState(false)
    const product = {
        id: data.id,
        brand: data.brand,
        name: data.name,
        price: data.price,
        img_url: data.api_featured_image,
        product_type: data.product_type,
        product_color: selectedColor,
        quantity: 1
    }
    const price = parseFloat(data.price).toFixed(2)
    const colorSelect = data.product_colors.length > 0 ? true : false
    const isColorSelected = !selectedColor && colorSelect ? true:false

    return (
        <div className="product">
            <Image src={'https:' + data.api_featured_image} alt={data.name} width={100} height={100} />
            <h4>{data.name}</h4>
            <h5>{selectedColor}</h5>
            {alert && <h5>Set Color Before Adding To Cart!</h5>}
            <div className="product-info">
            <ul className="product-colors">

                {data.product_colors?.map(color => {
                    const colorClass = selectedColor === color.colour_name ? "selected-li" : ""

                    return (<li
                        className={colorClass}
                        key={color.hex_value}
                        style={{ backgroundColor: `${color.hex_value}` }}
                        onClick={() => { setSelectedColor(color.colour_name); setHexCode(color.hex_value); setAlert(false) }}>
                    </li>)
                })}
            </ul>
            <h5>${price}</h5>
            {isColorSelected ?
            <Button onClick={() => { setAlert(true) }}>Add To Cart</Button> 
:
                <Button onClick={() => { cartId && addToCart(cartId, product); addItem(product); router.refresh() }}>Add To Cart</Button> 
        }</div>
        </div>
    )
}