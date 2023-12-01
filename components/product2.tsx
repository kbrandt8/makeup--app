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
  
    const colorSelect = data.product_colors?.length > 0 ? true : false
    const isColorSelected = !selectedColor && colorSelect ? true : false
    const regex = new RegExp("tags")
    const path = regex.test(pathname) ? "" : "/tags"

    return (
        <div className="product">
           <Link
           href={`/productPage/${data.id}`}
           ><Image src={'https:' + data.api_featured_image} alt={data.name} width={100} height={100} />
           </Link> 

        </div>
    )
}