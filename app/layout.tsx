import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from '@/context/context'
import CookieConsentBanner from '@/components/cookieBanner';
const inter = Inter({ subsets: ['latin'] })
import NavBar from '@/components/navbar';
export const metadata: Metadata = {
  title: 'K. K. Beauty',
  description: 'Made with Next 13 and Makeup-api',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        <NavBar/>
          {children}
          <CookieConsentBanner/>
        </CartProvider>
        
        </body>
    </html>
  )
}
