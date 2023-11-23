import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import Cart from "@/models/cart";


export async function GET(request, { params }) {
    const { id } = params
    await connectMongoDB();
    try {
        const cart = await Cart.findOne({ _id: id })
        return NextResponse.json(cart)
    } catch (error) {
        return NextResponse.json({ 'message': "could not get cart" })
    }
}
export async function POST(request, { params }) {
    const { id } = params
    const { item } = await request.json()
    const { items } = await Cart.findOne({ _id: id, })
    const isInCart = items.filter(product => product.id === item.id && product.product_color === item.product_color).length > 0 ? true : false
    if (!isInCart) {
        await connectMongoDB();
        try {
            await Cart.updateOne(
                { _id: id },
                {
                    $push: { items: item }
                }
            )
            getTotal(id)
            return NextResponse.json({ 'message': `${item.name}added to cart` })
        } catch (error) {
            return NextResponse.json({ 'message': "could not add to cart" })
        }
    } else {
        return NextResponse.json({ 'message': `${item.name}already in cart` })

    }

}

export async function DELETE(request, { params }) {
    const { id } = params;
    const { item } = await request.json();
    await connectMongoDB();

    try {
        await Cart.updateOne({ _id: id },
            {
                $pull: { items: item }
            })
         
        return NextResponse.json({ 'message': `${item.name} deleted from cart` })
    } catch (error) {
        return NextResponse.json({ 'message': "could not delete from cart" })

    }
}

export async function PUT(request, { params }) {
    const { id } = params;
    const { item, increment } = await request.json();
    const itemId = item.id
    await connectMongoDB();
    const { items } = await Cart.findOne({ _id: id, })
    const oldItem = items.filter(product => product.id === item.id && item.product_color === product.product_color)[0]
    let quantity = oldItem.quantity
    if (increment) {
        quantity += 1
        try {
            await Cart.findOneAndUpdate({ _id: id, 'items': { $elemMatch: { id: itemId } } },
                {
                    $set: { "items.$.quantity": quantity }
                }
            )
             
            return NextResponse.json({ 'message': `${item.name}'s quantity is now: ${quantity} ` })
        } catch (error) {
            console.log(error)
            NextResponse.json({ 'message': 'could not edit quantity' })

        }


    } else {
        quantity -= 1


        try {
            await Cart.findOneAndUpdate({ _id: id, 'items': { $elemMatch: { id: itemId } } },
                {
                    $set: {
                        "items.$.quantity": quantity,
                    }
                }
            )
             
            return NextResponse.json({ 'message': `${item.name}'s quantity is now: ${quantity} ` })
        } catch (error) {
            console.log(error)
            NextResponse.json({ 'message': 'could not edit quantity' })

        }


    }


}
export async function PATCH(request, { params }){
    const { id } = params;
    await connectMongoDB();
    const { items } = await Cart.findOne({ _id: id, })
    const itemTotal = items.map(item =>parseFloat(item.price) * item.quantity) 
    const total = itemTotal.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    try {
        await Cart.findOneAndUpdate({_id:id},{
            total:total
        })
        return NextResponse.json({ 'message': `Cart total is now: ${total} ` })

        
    } catch (error) {
        console.log(error)
        NextResponse.json({ 'message': 'could not edit total' })
    }
}

