import { Router } from "express";
import { AuthAdmin } from "./admins-controller.js";
import asyncHandler from 'express-async-handler';

const router = Router();


router.post('/admin/login', AuthAdmin);


export default router;