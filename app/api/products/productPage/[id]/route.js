import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import Product from '@/models/product';
export async function GET(request,{params}){
    const {id} = params
    await connectMongoDB();
    try {
        const product = await Product.findOne({
            id:id
        })

        return NextResponse.json({product})
    } catch (error) {
      throw new Error("Could not fetch")  
    }


}