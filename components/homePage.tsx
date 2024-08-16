'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductType } from "@/utils/dataTypes"
import Link from "next/link"
import Image from "next/image";
import { brands, products, tagList } from "@/utils/lists"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState, useCallback, useEffect, Suspense } from 'react';

export default function Home(
) {
    const [width, setWidth] = useState(0)
    const responsive = {
        superLargeDesktop: {
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
    // eslint-disable-next-line
    useEffect(() => {
        if (window) {
            setWidth(window.innerWidth)
            window.addEventListener("resize", newWidth);
        }
    })

    return (<div className="home">


        <ul>

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
