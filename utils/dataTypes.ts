export type ProductType ={
    id:number,
    name:string,
    description:string,
    brand:string,
    price:string,
    api_featured_image:string,
    product_type:string,
    product_colors:[{
        hex_value:string,
        colour_name:string
    }]
}

export type CartItemType = {
    id: number,
    _id:string,
    name: string,
    description: string,
    brand: string,
    price: string,
    img_url: string,
    product_type: string,
    product_color: string,
    quantity: number
}