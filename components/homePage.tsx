'use client'
import "react-multi-carousel/lib/styles.css";
import Link from "next/link"
import { brands, products, tagList } from "@/utils/lists"


export default function Home(
) {
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
