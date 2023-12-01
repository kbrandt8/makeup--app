'use client'
import { useCartContext } from "@/context/context"
import { useState, useEffect } from 'react'
import { CartItemType, ProductType } from "@/utils/dataTypes"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "react-bootstrap"
import { startCart } from "@/utils/cartActions"
import { brands, products, tagList } from "@/utils/lists"
import Product from "./product"
import Card from 'react-bootstrap/Card';

export default function Home({ display }: {
    display: {
        displayBrand: [ProductType],
        displayProduct: [ProductType]
    }
}) {
    const router = useRouter()
    const { cartId, total, items } = useCartContext()
    const [showCookie, setShowCookie] = useState(false)

    useEffect(() => {
        if (cartId) {
            setShowCookie(false)
        } else {
            setShowCookie(true)
        }
    }, [cartId])
    return (<div className="home">


        {total > 0 &&

            <div className='your-picks'>
                <h1>Your Picks</h1>
                {showCookie && <Button onClick={() => { startCart(); setShowCookie(false) }}>Enable Cookies For a Better Experience</Button>}
                <ul className='display'>
                    {items.slice(0, 2).map((item: CartItemType) =>
                        <li key={item.id}>
                            <Card style={{ width: '8rem' }}>
                                <Card.Img variant="top" src={'https:' + item.img_url} />
                                <Card.Body>

                                    <Card.Text>
                                        {item.name}
                                    </Card.Text>
       
                                </Card.Body>
                            </Card>

                                                         <Button href={`/products/${item.product_type}`}> {item.product_type}</Button><br/>
                                    <Button href={`/brands/${item.brand}`}> {item.brand} Products</Button>

                        </li>
                    )}
                </ul>
            </div>
        }
        <ul>

            <li>
                <h1>{display.displayProduct[0].product_type.replace("_", " ")}</h1>
                <ul className='display'>
                    {display.displayProduct.slice(0, 4).map((item: ProductType) =>
                        <Product data={item} key={item.id} />
                    )}
                </ul>
            </li>


            <li><h1> {display.displayBrand[0].brand}</h1>
                <ul className='display'>
                    {display.displayBrand.slice(0, 4).map((item: ProductType) =>

                        <Product data={item} key={item.id} />


                    )}
                </ul>

            </li>
            <li><h1>View By Product</h1>

                {products.map((item: string) =>
                    <h5 key={products.indexOf(item)}>
                        <Link href={`/products/${item}`}>{item.replace("_", " ")}</Link>
                    </h5>)}

            </li>
            <li><h1>View By Tag</h1>

                {tagList.map((item: string) =>
                    <h5 key={tagList.indexOf(item)}>
                        <Link href={`/tags/${item}`}>{item}</Link>
                    </h5>)}

            </li>
            <li><h1>View By Brand</h1>
                {brands.map((item: string) =>
                    <h5 key={brands.indexOf(item)}>
                        <Link href={`/brands/${item}`}>{item}</Link>
                    </h5>)}

            </li>



        </ul>

    </div>)
}