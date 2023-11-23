import Link from "next/link"
export default function Page(){
    const products = [
`nail_polish`,`mascara`,`lipstick`,`lip_liner`,`foundation`,`eyeshadow`,`eyeliner`,`eyebrow`,`bronzer`,`blush`
    ]

    const links = products.map(item=><li key={products.indexOf(item)}><Link href={`/products/${item}`}>{item}</Link></li>)
    return(
        <main>
{links}
        </main>
    )
}