import mongoose from "mongoose";
const Schema=mongoose.Schema

const employee = new Schema({
    name:{
        type:String,

        required:true
    },
    
    vehicleNumber:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    campus:{
        type:String,
        required:true
    },
    
})
export default mongoose.model('pro',employee)
                           //collection name,variable