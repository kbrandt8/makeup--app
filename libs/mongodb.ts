import mongoose from "mongoose";

const connectMongoDB = async () =>{
    const URI = process.env.NEXT_PUBLIC_MONGODB_URI || ""
    try {
       await mongoose.connect(URI);

    } catch (error) {
        console.log(error);
        
    }
};

export default connectMongoDB;