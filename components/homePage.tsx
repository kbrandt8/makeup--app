'use client'
import { useCartContext } from "@/context/context"
import Link from "next/link"
export default function Home() {
    const { cartId, cartNumber } = useCartContext()
    return (<div className="home">
        {/* {cartNumber > 0 &&
        <h1><Link href={'/cart'}>
        View {cartNumber} {cartNumber >1 ?"items" : "item"} in Cart
        </Link></h1>
        } */}

        <ul>
            <li><h1>One</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc. Sed tempus urna et pharetra pharetra massa. Ac auctor augue mauris augue neque gravida in. Purus ut faucibus pulvinar elementum integer. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aliquet risus feugiat in ante. Sit amet volutpat consequat mauris nunc congue nisi. Magnis dis parturient montes nascetur. Odio euismod lacinia at quis risus sed vulputate odio. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Neque vitae tempus quam pellentesque nec. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Integer enim neque volutpat ac tincidunt. Varius vel pharetra vel turpis nunc eget. Ut tellus elementum sagittis vitae et leo. Fermentum odio eu feugiat pretium nibh ipsum.</p>
            </li>
            <li><h1>Two</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc. Sed tempus urna et pharetra pharetra massa. Ac auctor augue mauris augue neque gravida in. Purus ut faucibus pulvinar elementum integer. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aliquet risus feugiat in ante. Sit amet volutpat consequat mauris nunc congue nisi. Magnis dis parturient montes nascetur. Odio euismod lacinia at quis risus sed vulputate odio. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Neque vitae tempus quam pellentesque nec. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Integer enim neque volutpat ac tincidunt. Varius vel pharetra vel turpis nunc eget. Ut tellus elementum sagittis vitae et leo. Fermentum odio eu feugiat pretium nibh ipsum.</p>
            </li>
            <li><h1>Three</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc. Sed tempus urna et pharetra pharetra massa. Ac auctor augue mauris augue neque gravida in. Purus ut faucibus pulvinar elementum integer. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aliquet risus feugiat in ante. Sit amet volutpat consequat mauris nunc congue nisi. Magnis dis parturient montes nascetur. Odio euismod lacinia at quis risus sed vulputate odio. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Neque vitae tempus quam pellentesque nec. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Integer enim neque volutpat ac tincidunt. Varius vel pharetra vel turpis nunc eget. Ut tellus elementum sagittis vitae et leo. Fermentum odio eu feugiat pretium nibh ipsum.</p>
            </li>
            <li><h1>Four</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc. Sed tempus urna et pharetra pharetra massa. Ac auctor augue mauris augue neque gravida in. Purus ut faucibus pulvinar elementum integer. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aliquet risus feugiat in ante. Sit amet volutpat consequat mauris nunc congue nisi. Magnis dis parturient montes nascetur. Odio euismod lacinia at quis risus sed vulputate odio. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Neque vitae tempus quam pellentesque nec. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Integer enim neque volutpat ac tincidunt. Varius vel pharetra vel turpis nunc eget. Ut tellus elementum sagittis vitae et leo. Fermentum odio eu feugiat pretium nibh ipsum.</p>
            </li>

        </ul>

    </div>)
}