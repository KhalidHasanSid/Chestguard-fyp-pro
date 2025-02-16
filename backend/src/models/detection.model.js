import mongoose from "mongoose";


const detectionSchema = mongoose.Schema({

    patient:{
        type:Schema.Types.ObjectId,
        ref:"Patient"
     },

     result: [
           {
               xray: {type:String,
                trim: true,
                required:true
                     
               },
               date:{
                type:Date,
                required:true
               },
               result:{
                type:String,
                required:true
               },

               conclusion:{
                type:String
               }

           }
     ]
},{timestamps:true})


const Detection =mongoose.model("Detection",detectionSchema)

export default Detection