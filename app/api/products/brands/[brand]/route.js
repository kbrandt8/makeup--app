import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import Product from '@/models/product';
export async function GET(request, { params }) {
    const { brand } = params
    const tagParams = request.nextUrl.searchParams.get('tags');
    const tags = tagParams && tagParams.split(",")
    await connectMongoDB();
    if (tags) {
        try {
            const products = await Product.find({
                brand,
                tag_list:{$all : tags}
            })
            return NextResponse.json({ products })
        } catch (error) {
            console.log(error)
            throw new Error("Could not fetch")
        }
    } else {
        try {
            const products = await Product.find({
                brand
            })
            return NextResponse.json({ products })
        } catch (error) {
            console.log(error)
            throw new Error("Could not fetch")
        }
    }

}