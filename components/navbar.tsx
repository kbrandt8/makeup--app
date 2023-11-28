'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { products, brands,tagList } from '@/utils/lists';
import { useCartContext } from "@/context/context";
import { FaCartShopping } from "react-icons/fa6"
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
export default function NavBar() {
  const {
    total,
    items
  } = useCartContext()

  const [showBrands, setShowBrands] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showTags, setShowTags] = useState(false);

  const handleCloseBrands = () => setShowBrands(false);
  const handleShowBrands = () => setShowBrands(true);
  const handleCloseProducts = () => setShowProducts(false);
  const handleShowProducts = () => setShowProducts(true);
  const handleCloseTags = () => setShowTags(false);
  const handleShowTags = () => setShowTags(true);

  return (<div >
    <Navbar sticky="top" expand="sm" className="nav">
      <Container>
        <Navbar.Brand href="/">K. K. Beauty</Navbar.Brand>
        <Navbar.Brand href="/cart" ><FaCartShopping /> ${total.toFixed(2)}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={handleShowBrands}>Brands</Nav.Link>
            <Nav.Link onClick={handleShowProducts}>Products</Nav.Link>
            <Nav.Link onClick={handleShowTags}>Tags</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Offcanvas show={showBrands} onHide={handleCloseBrands}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>All Brands</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

        {brands.map((item: string) =>
          <h3 key={brands.indexOf(item)}>
            <Link onClick={handleCloseBrands} href={`/brands/${item}`}>{item}</Link>
          </h3>
        )}
      </Offcanvas.Body>


    </Offcanvas>

    <Offcanvas show={showProducts} onHide={handleCloseProducts} className="offCanvas">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Product Types</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

        {products.map((item: string) =>
          <h3 key={products.indexOf(item)}>
            <Link onClick={handleCloseProducts} href={`/products/${item}`}>{item.replace("_", " ")}</Link>
          </h3>
        )}
      </Offcanvas.Body>
    </Offcanvas>

    <Offcanvas show={showTags} onHide={handleCloseTags} className="offCanvas">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Product Tags</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

        {tagList.map((item: string) =>
          <h3 key={tagList.indexOf(item)}>
            <Link onClick={handleCloseTags} href={`/tags/${item}`}>{item.replace("_", " ")}</Link>
          </h3>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  </div>
  )
}