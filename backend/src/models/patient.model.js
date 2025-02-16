import mongoose from "mongoose"

const pateintSchema =new mongoose.Schema({
    MR_no:
    {
        type: String,
        required:true,
        unique:true,
        trim:true

    },
    fullName:
    {
        type: String,
        required:true,
        unique:true,
        trim:true

    },
    email:
    {
        type: String,
        required:true,
        unique:true,
        trim:true

    },
    age:
    {
        type: Number,
        required:true,
        unique:true,
        trim:true

    },
    gender:
    {
        type: String,
        required:true,
        unique:true,
        trim:true

    },


    city:
    {
        type: String,
        required:true,
        unique:true,
        trim:true

    },



},{timestamps:true})


const Patient = mongoose.model("Patient",pateintSchema)
export default Patient