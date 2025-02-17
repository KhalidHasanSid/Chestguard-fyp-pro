import asyncHandler from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";

const detectionController =asyncHandler((req,res,next)=>{

    console.log("HAN AMMMMAZ KIA SEEN HAI!!!!");

    const {MR_no}=req.body
    const xrayImage=req.file
    console.log(MR_no,"========================================",xrayImage)
    if(!xrayImage){throw new  apiError(409,"no image obtained")}

    const i = Math.random() < 0.5 ? 0 : 1;

    let arr=['pneumonia','tuberclosiss'];

    const result = arr[i]
    res.json(new apiResponse(200,result,"result generated "))

})
export {detectionController}