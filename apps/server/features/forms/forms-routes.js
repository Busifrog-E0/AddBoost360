import {

	GetOneFromForms,
	GetForms,
	PostForms,
	PatchForms,
	DeleteForms,
} from './forms-controller.js';


import asyncHandler from 'express-async-handler';

import { decodeIDToken, ensureAuthorized } from '../auth/auth-middleware.js';

import { ValidatePostForm, ValidateGetForm, ValidatePatchForm } from './forms-validations.js';

import { QueryParameterFormatting } from '../../common/middleware/common.js';
import SwaggerDocs from './forms-swaggerDocs.js'
import e from 'express';
const router = e.Router();



router.get('/forms', decodeIDToken, ensureAuthorized(), ValidateGetForm, QueryParameterFormatting, SwaggerDocs.get_Form,
    //@ts-ignore
asyncHandler(GetForms));



router.get('/forms/:FormId', decodeIDToken, ensureAuthorized(), SwaggerDocs.get_Form_FormId,
	// @ts-ignore
	asyncHandler(GetOneFromForms)
);



router.post('/forms', decodeIDToken, ensureAuthorized(),ValidatePostForm, SwaggerDocs.post_Form,
	// @ts-ignore
	asyncHandler(PostForms)
);



router.patch('/forms/:FormId', decodeIDToken, ensureAuthorized(),ValidatePatchForm, SwaggerDocs.patch_Form_FormId,
	// @ts-ignore
	asyncHandler(PatchForms)
);




router.delete('/forms/:FormId', decodeIDToken, ensureAuthorized(), SwaggerDocs.delete_Form_FormId,
	// @ts-ignore
	asyncHandler(DeleteForms)
);

export default router;
