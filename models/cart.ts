import mongoose, { Schema } from "mongoose";
const itemSchema = new Schema(
    {
        id: Number,
        brand:String,
        name:String,
        price:String,
        img_url:String,
        product_type:String,
        product_color:String,
        quantity:Number,
    }
)

const cartSchema = new Schema(
    {
        items: [itemSchema],
        total:Number
    }
)

const Cart = mongoose.models.Cart ?? mongoose.model("Cart", cartSchema)
export default Cart


