'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='not-found'>
      <h1>404 Not Found</h1>
      <p>Uh-Oh, the requested page doesn't exist...</p>
      <h2><Link href="/">Return Home?</Link> </h2>
    </main>
  )
}