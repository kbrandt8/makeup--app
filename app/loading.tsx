'use client'
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

export default function Loading() {
  return (
    <main className='loading'>
      <h1>
        Loading...
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </h1>
      {/* <ul
        className="products"
      >
      <Card style={{ width: '8rem', height: '10rem' }} className="product-card">
      </Card>
      </ul> */}

    </main>
  )
}