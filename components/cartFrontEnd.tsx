'use client'
import { useRouter } from 'next/navigation'
import CartItem from "./cartItem"
import {useEffect,useState} from 'react'
import { CartItemType } from '@/utils/dataTypes'
export default function CartFrontEnd({ data,total }: {
    data: {
        _id:string,
    items:[CartItemType]
    },
total:number}  
) {
    const allItems = data.items.map(item=><div key={item.id}>
        <CartItem data={item}/>
    </div>)

    
    return(<div>
        {total.toFixed(2)}
        {allItems}
        </div>
    )


}