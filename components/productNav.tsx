'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { products, brands, tagList } from '@/utils/lists';
import { usePathname } from 'next/navigation';
export default function ProductNav({ product, brand, tags }: {
    product: boolean,
    brand: boolean,
    tags: boolean,
}) {
    const pathname = usePathname();
    const productMap = products.map(product => <Nav.Link key={products.indexOf(product)} href={`/products/${product}`}>{product}</Nav.Link>)
    const brandMap = brands.map(brand => <Nav.Link key={brands.indexOf(brand)} href={`/brands/${brand}`}>{brand}</Nav.Link>)
    if (!brand) {
        return (
            <Navbar className="nav">
                <Container>
                    <Nav className="me-auto">
                        {
                            brands.map(brand =>
                                <Nav.Link
                                    key={brands.indexOf(brand)}
                                    href={`/brands/${brand}/${pathname}`}>
                                    {brand}
                                </Nav.Link>)
                        }
                    </Nav>
                </Container>
            </Navbar>
        )
    }
    else if (!product) {
        return (
            <Navbar className="nav">
                <Container>
                    <Nav className="me-auto">
                        {
                            products.map(product =>
                                <Nav.Link
                                    key={products.indexOf(product)}
                                    href={`${pathname}/products/${product}`}>
                                    {product.replace("_", " ")}
                                </Nav.Link>)

                        }
                    </Nav>
                </Container>
            </Navbar>
        )

    }
    else {
        return (
            <Navbar className="nav">
                <Container>
                    <Nav className="me-auto">
                        {tagList.map((tag: string) =>
                            <Nav.Link
                                key={tagList.indexOf(tag)}
                                href={`${pathname}/tags/${tag}`}

                            >
                                {tag.replace("%20", " ")}
                            </Nav.Link>)}
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}


