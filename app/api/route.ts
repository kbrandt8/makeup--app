import { NextResponse } from "next/server";

export async function GET(
    _request: Request,
    { params }: { params: { hexcode: string } }   
){
    try {
         
        const color = params.hexcode;
        const key = process.env.MAKEUP_API_KEY
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': 'makeup.p.rapidapi.com'
             }
        };
    const url = `https://makeup.p.rapidapi.com/products.json?product_colors.hex_value=${color}`
   const getMakeup =  await fetch(url,options).then(response => response.json())
   return NextResponse.json(getMakeup)
   
    } catch (error) {
        return NextResponse.json(error)
    }


}