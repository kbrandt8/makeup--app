'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductType } from "@/utils/dataTypes"
import Link from "next/link"
import Image from "next/image";
import { brands, products, tagList } from "@/utils/lists"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState, useCallback, useEffect } from 'react';


export default function Home({ display }: {
    display: {
        displayBrand: [ProductType],
        displayProduct: [ProductType]
    }
}) {
    const [width, setWidth] = useState(0)
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
            items: 3
        },
        mobile: {
            breakpoint: { max: 700, min: 500 },
            items: 2
        },
    };
    const newWidth = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        if (window) {
            window.addEventListener("resize", newWidth);
        }
    })

    const displayProductName = display.displayProduct[0].product_type.replace("_", " ")
    const displayBrandName = display.displayBrand[0].brand
    return (<div className="home">


        <ul>

            <li className="display">
                <h1>
                    <Link
                        href={`/products/${display.displayProduct[0].product_type}`}
                    >
                        View {displayProductName}
                        {displayProductName === "eyebrow" && " Products"}
                    </Link>
                </h1>

                {width > 500 && <Carousel
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    customRightArrow={<FaArrowRight />}
                    customLeftArrow={<FaArrowLeft />}
                    className="Carousel"

                >
                    {display.displayProduct.map((item: ProductType) =>
                        <Link key={item.id} className="display-item" href={`/productPage/${item.id}`}>
                            <Image
                                src={'https:' + item.api_featured_image}
                                alt={item.name}
                                width={100}
                                height={100}
                            />

                        </Link>
                    )}
                </Carousel>}
                {width <= 500 &&
                    <div className="small-display">
                        {display.displayProduct.slice(0, 3).map((item: ProductType) =>
                            <Link key={item.id} className="display-item small-display-item" href={`/productPage/${item.id}`}>
                                <Image
                                    src={'https:' + item.api_featured_image}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                />

                            </Link>
                        )}
                    </div>}
            </li>
            <li className="display">
                <h1>
                    <Link
                        href={`/brands/${display.displayBrand[0].brand}`}
                    > View {displayBrandName} Products
                    </Link>
                </h1>
                {width > 500 && <Carousel
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    customRightArrow={<FaArrowRight />}
                    customLeftArrow={<FaArrowLeft />}
                    className="Carousel"

                >
                    {display.displayBrand.map((item: ProductType) =>

                        <Link key={item.id} className="display-item" href={`/productPage/${item.id}`}>
                            <Image
                                src={'https:' + item.api_featured_image}
                                alt={item.name}
                                width={100}
                                height={100}
                            />

                        </Link>
                    )}
                </Carousel>}

                {width <= 500 &&
                    <div className="small-display">

                        {display.displayBrand.slice(0, 3).map((item: ProductType) =>

                            <Link key={item.id} className="display-item small-display-item" href={`/productPage/${item.id}`}>
                                <Image
                                    src={'https:' + item.api_featured_image}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                />

                            </Link>
                        )}
                    </div>}

            </li>


            <li className="category-item">
                <h1>View By Product</h1>

                {products.map((item: string) =>
                    <h5 key={products.indexOf(item)}>
                        <Link href={`/products/${item}`}>{item.replace("_", " ")}</Link>
                    </h5>)}

            </li>
            <li className="category-item">
                
                <h1>View By Tag</h1>

                {tagList.map((item: string) =>
                    <h5 key={tagList.indexOf(item)}>
                        <Link href={`/tags/${item}`}>{item}</Link>
                    </h5>)}

            </li>
            <li className="category-item">
                
                <h1>View By Brand</h1>
                {brands.map((item: string) =>
                    <h5 key={brands.indexOf(item)}>
                        <Link href={`/brands/${item}`}>{item}</Link>
                    </h5>

                )}

            </li>



        </ul>

    </div>)
}
