import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true,
        default:"frontend_developer"
    }

},{timestamps:true})

export default mongoose.model("users",userSchema);