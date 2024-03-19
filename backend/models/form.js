import mongoose from "mongoose";
const Schema=mongoose.Schema

const form = new Schema({
    name:{
        type:String,

        required:true
    },
    date:{
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
    reason:{
        type:String,
        required:true
    },
    timeIn:{
        type:String,
        required:true
    },

   
   
})
export default mongoose.model('project',form)
                           //collection name,variable