import { Router } from "express";
import { decodeIDToken, ensureAuthorized } from '../auth/auth-middleware.js';
import { PostFilesAdmin } from './files-controller.js'
import { ValidatePostFilesAdmin, } from "./files-validations.js";
import asyncHandler from 'express-async-handler';
import swaggerDocs from './files-swaggerDocs.js';



const router = Router();



router.post('/files/admin', decodeIDToken, ensureAuthorized("Admin",),
    ValidatePostFilesAdmin, swaggerDocs.post_files_admin,
    // @ts-ignore
    asyncHandler(PostFilesAdmin));



export default router;