

import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import Cart from "@/models/cart";

export async function POST() {
    await connectMongoDB();
    try {
        const newId2 = new mongoose.Types.ObjectId();
        await Cart.create({ _id: newId2, items: [],total:0 })
        const cart = await Cart.findById(newId2)
        const response = NextResponse.json(newId2)
        const expiration = 24 * 60 * 60 * 1000 * 90
        response.cookies.set({
            name: 'cartId',
            value: newId2,
            expires:Date.now() + expiration
        })

        return response

    } catch (error) {
        throw new Error("failed to post", error)
    }
}
