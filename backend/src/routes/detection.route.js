import {Router} from "express"
import { detectionController } from "../controllers/detection.controller.js"
import auth from "../middlewares/auth.middleware.js"
import upload from "../middlewares/multer.js"

const detectionRouter =Router()

detectionRouter.route("/sendImage/:MR_no").post( upload.single("xrayImage"), detectionController)
//detectionRouter.route("/getRecords").post(getRecords)


export default detectionRouter