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
import Card from 'react-bootstrap/Card';
export default function Product({ data }: {
    data: ProductType
}) {
    const {
        cartId,
        addItem,

    } = useCartContext()

    return (
        <li className="product">
            <Link
                href={`/productPage/${data.id}`}
            >
                <Card style={{ width: '8rem' }} className="product-card">
                    <Card.Img variant="top" src={'https:' + data.api_featured_image} />
                    <Card.Body>

                        <Card.Text>
                            {data.name}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Link>
        </li>
    )
}