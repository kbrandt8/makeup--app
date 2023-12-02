'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCartContext } from "@/context/context"
import { ProductType } from "@/utils/dataTypes"
import Link from "next/link"
import Image from "next/image";
import { brands, products, tagList } from "@/utils/lists"
import Product from "./product"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

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
            items: 3
        },
        mobile: {
            breakpoint: { max: 700, min: 400 },
            items: 2
        },
        smallMobile: {
            breakpoint: { max: 300, min: 0 },
            items: 1
        },

    };

    const { cartId } = useCartContext()


    return (<div className="home">


        <ul>

            <li>
                <h1>
                    <Link
                        href={`/products/${display.displayProduct[0].product_type}`}
                    >
                        View {display.displayProduct[0].product_type.replace("_", " ")}
                    </Link>
                </h1>

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    removeArrowOnDeviceType={["tablet", "mobile","smallMobile"]}
                    autoPlay={true}
                    autoPlaySpeed={4000}


                >
                    {display.displayProduct.map((item: ProductType) =>
                        <button key={item.id} className="display-item" >
                            <Image
                                src={'https:' + item.api_featured_image}
                                alt={item.name}
                                width={100}
                                height={100}
                            />

                        </button>
                    )}
                </Carousel>

            </li>


            <li>
                <h1>
                    <Link
                        href={`/brands/${display.displayBrand[0].brand}`}
                    > View {display.displayBrand[0].brand} Products
                    </Link>
                </h1>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    removeArrowOnDeviceType={["tablet", "mobile","smallMobile"]}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    customRightArrow={<FaArrowRight />}
                    customLeftArrow={<FaArrowLeft />}

                >
                    {display.displayBrand.map((item: ProductType) =>

                        <button key={item.id} className="display-item" >
                            <Image
                                src={'https:' + item.api_featured_image}
                                alt={item.name}
                                width={100}
                                height={100}
                            />

                        </button>
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
                    </h5>

                )}

            </li>



        </ul>

    </div>)
}
