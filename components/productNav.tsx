'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { products, brands, tagList } from '@/utils/lists';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Collapse from 'react-bootstrap/Collapse';
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
export default function ProductNav() {
    const router = useRouter()
    const params = useParams()
    const searchParams = useSearchParams()

    const [showBrands, setShowBrands] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [showTags, setShowTags] = useState(false)

    const pathname = usePathname();
    const { brand, product } = params
    const tags = searchParams.get('tags')

    const tagsLink = tags ? `?tags=${tags?.split(",")}` : ""
    const brandLink = brand ? `/brands/${brand}` : ``
    const productLink = product ? `/products/${product}` : ``
    const newProductLink = `${brandLink}${tagsLink}` === `` ? `/products` : `${brandLink}${tagsLink}`
    const newBrandLink = `${productLink}${tagsLink}` === `` ? `/products` : `${productLink}${tagsLink}`
    const newTagLink = `${brandLink}${productLink}` === `` ? `/products` : `${brandLink}${productLink}`



    return (<>

        <Navbar className="nav">
            <Container>
                <Nav className="me-auto">
                    <Button
                        onClick={() => { setShowBrands(!showBrands) }}
                        aria-controls="brands"
                        aria-expanded={showBrands}
                    >Brands</Button>

                    <Button
                        onClick={() => { setShowProducts(!showProducts) }}
                        aria-controls="products"
                        aria-expanded={showProducts}
                    >Product Type</Button>

                    <Button
                        onClick={() => { setShowTags(!showTags) }}
                        aria-controls="tags"
                        aria-expanded={showTags}
                    >Tags</Button>


                </Nav>
            </Container>
        </Navbar>
        <Collapse in={showBrands}>
            <div className='link-list' id='brands'>
                {brands.map(brand =>
                    <Button
                        variant='secondary'
                        key={brands.indexOf(brand)}
                        href={`/brands/${brand}/${productLink}/${tagsLink}`}>
                        {brand}
                    </Button>)}
            </div>
        </Collapse>

        <Collapse in={showProducts}>
            <div className='link-list' id='brands'>

                {products.map(product =>
                    < Button
                        variant='secondary'
                        key={products.indexOf(product)}
                        href={`${brandLink}/products/${product}/${tagsLink}`
                        }>
                        {product.replace("_", " ")}
                    </Button>
                )}
            </div>
        </Collapse >

        <Collapse in={showTags}>
            <div className='link-list' id='brands'>
                {tagList.map(tag => {
                    const regex = new RegExp("tags")
                    const path = regex.test(tagsLink) ? "" : "?tags="
                    const newTag = tag.replace(" ", "%20")
                    const tagRegex = new RegExp(`${newTag}`)
                    const isInpath = tagRegex.test(tagsLink)
                    const tags = tagsLink !== "" ? tagsLink + "," : ""

                    if (!isInpath) {
                        return <Button
                            variant='secondary'
                            key={tagList.indexOf(tag)}
                            href={`${pathname}${path}${tags}${tag}`}>

                            {tag}
                        </Button>
                    }
                })}
            </div>
        </Collapse>
        {productLink !== "" &&
            <Button
                href={`${newProductLink}`}
            >
                Clear Product Type
            </Button>}
        {brandLink !== "" &&
            <Button
                href={`${newBrandLink}`}
            >
                Clear Brand
            </Button>}
        {tagsLink !== "" &&
            <Button
                href={`${newTagLink}`}
            >
                Clear Tags
            </Button>}


    </>
    )


}


