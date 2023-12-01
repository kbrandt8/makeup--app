import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import Product from "@/models/product";
export async function POST(request,{params}){
    const {products} = await request.json()
    
    await connectMongoDB();
    try {
        await Product.create(products)
        const product = await Product.findOne({id:products[0].id})
       
        return NextResponse.json(product)
    } catch (error) {
        console.log(error)
        throw new Error("failed to post", error)
    }


}