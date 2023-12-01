import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import Product from '@/models/product';
export async function GET(request,{params}){
    const {product} = params
    const tagParams = request.nextUrl.searchParams.get('tags');
    const tags = tagParams && tagParams.split(",");

    await connectMongoDB();
    if(tags){
        try {
            const products = await Product.find({
                product_type:product,
                tag_list:{$all : tags}
            })
            return NextResponse.json({products})
        } catch (error) {
            console.log(error)
          throw new Error("Could not fetch")  
        }     
    }else{
   
    try {
        const products = await Product.findOne({
            product_type:product
        })
        return NextResponse.json({products})
    } catch (error) {
        console.log(error)
      throw new Error("Could not fetch")  
    }     
    }


}