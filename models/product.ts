import mongoose, { Schema } from "mongoose";
const colorSchema = new Schema(
    {
        hex_value:String,
        colour_name:String
    }
)
const productSchema = new Schema(
    {
        id:Number,
        name:String,
        description:String,
        brand:String,
        price:String,
        api_featured_image:String,
        product_type:String,
        product_colors:[colorSchema],
        tag_list:[String]
    }
)
const Product = mongoose.models.Product ?? mongoose.model("Product", productSchema)
export default Product