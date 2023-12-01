'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 700 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 2
        }
    };

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

                            <Button href={`/products/${item.product_type}`}> {item.product_type}</Button><br />
                            <Button href={`/brands/${item.brand}`}> {item.brand} Products</Button>

                        </li>
                    )}


                </ul>
            </div>
        }


        <ul>

            <li>
                <h1>{display.displayProduct[0].product_type.replace("_", " ")}</h1>

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    autoPlay={true}
                    autoPlaySpeed={4000}
        

                >
                    {display.displayProduct.map((item: ProductType) =>
                        <Product data={item} key={item.id} />
                    )}
                </Carousel>

            </li>


            <li><h1> {display.displayBrand[0].brand}</h1>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    autoPlay={true}
                    autoPlaySpeed={3000}

                >
                    {display.displayBrand.map((item: ProductType) =>

                        <Product data={item} key={item.id} />


                    )}
                </Carousel>

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