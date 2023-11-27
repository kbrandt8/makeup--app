'use client'
import { addToCart } from "@/utils/cartActions";
import { useCartContext } from "@/context/context";
import { Button } from "react-bootstrap";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation';
import { ProductType } from "@/utils/dataTypes";
import Link from "next/link";

export default function Product({ data }: {
    data: ProductType
}) {
    const {
        cartId,
        addItem,

    } = useCartContext()
    const router = useRouter()
    const pathname = usePathname();
    const [selectedColor, setSelectedColor] = useState('')
    const [showDesc, setShowDesc] = useState(false)
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
    const isColorSelected = !selectedColor && colorSelect ? true : false
    const regex = new RegExp("tags")
    const path = regex.test(pathname) ? "" : "/tags"

    return (
        <div className="product">
            <Image src={'https:' + data.api_featured_image} alt={data.name} width={100} height={100} />
            <h4>{data.name}</h4>
            <h5>{selectedColor}</h5>
            {alert && <h5>Set Color Before Adding To Cart!</h5>}

            {data.description?.split("").length > 100 && <div className="product-description">
                <p>
                    {data.description?.slice(0, 100)}
                    {showDesc ? data.description.slice(100) : "..."}
                </p>

                <Button
                    variant="secondary"
                    onClick={() => setShowDesc(!showDesc)}

                >
                    {showDesc ? "See Less" : "See More"}
                </Button>
            </div>}
            <div className="product-info">
            {data.tag_list.length > 0 &&
                <div className="product-features">
                    <h5>Product tags:</h5>
                    {data.tag_list.map((tag: string) => <Link href={`${pathname}${path}/${tag}`} key={data.tag_list.indexOf(tag)}>{tag}</Link>)}

                </div>}
                <ul className="product-colors">
                    {data.product_colors?.map(color => {
                        const colorClass = selectedColor === color.colour_name ? "selected-li" : ""

                        return (<li
                            className={colorClass}
                            key={color.hex_value}
                            style={{ backgroundColor: `${color.hex_value}` }}
                            onClick={() => { setSelectedColor(color.colour_name); setAlert(false) }}>
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