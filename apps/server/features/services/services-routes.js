import {

	GetOneFromServices,
	GetServices,
	PostServices,
	PatchServices,
	DeleteServices,
} from './services-controller.js';


import asyncHandler from 'express-async-handler';

import { decodeIDToken, ensureAuthorized } from '../auth/auth-middleware.js';

import { ValidatePostService, ValidateGetService, ValidatePatchService } from './services-validations.js';

import { QueryParameterFormatting } from '../../common/middleware/common.js';
import SwaggerDocs from './services-swaggerDocs.js'
import e from 'express';
const router = e.Router();



router.get('/services', decodeIDToken, ensureAuthorized(), ValidateGetService, QueryParameterFormatting, SwaggerDocs.get_Service,
    //@ts-ignore
asyncHandler(GetServices));



router.get('/services/:ServiceId', decodeIDToken, ensureAuthorized(), SwaggerDocs.get_Service_ServiceId,
	// @ts-ignore
	asyncHandler(GetOneFromServices)
);



router.post('/services', decodeIDToken, ensureAuthorized(),ValidatePostService, SwaggerDocs.post_Service,
	// @ts-ignore
	asyncHandler(PostServices)
);



router.patch('/services/:ServiceId', decodeIDToken, ensureAuthorized(),ValidatePatchService, SwaggerDocs.patch_Service_ServiceId,
	// @ts-ignore
	asyncHandler(PatchServices)
);




router.delete('/services/:ServiceId', decodeIDToken, ensureAuthorized(), SwaggerDocs.delete_Service_ServiceId,
	// @ts-ignore
	asyncHandler(DeleteServices)
);

export default router;
