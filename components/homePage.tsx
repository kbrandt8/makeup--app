'use client'
import { useCartContext } from "@/context/context"
export default function Home(){
const {loggedIn} = useCartContext()
return (<div>
<h1>home</h1>
<h5>{loggedIn }</h5>

</div>)
}