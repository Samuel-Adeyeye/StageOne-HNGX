import { Router } from "express";
import { getProfileDetails } from "../controller/profile";




const router = Router();



router.get('/api', getProfileDetails);



export default router;