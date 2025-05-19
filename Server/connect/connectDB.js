import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connect DB")
    } catch(error){
        console.log("Mongodb connect error")
    }
}
export default connectDB
