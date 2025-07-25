import {

	GetOneFromOrganizations,
	GetOrganizations,
	PostOrganizations,
	PatchOrganizations,
	DeleteOrganizations,
} from './organizations-controller.js';


import asyncHandler from 'express-async-handler';

import { decodeIDToken, ensureAuthorized } from '../auth/auth-middleware.js';

import { ValidatePostOrganization, ValidateGetOrganization, ValidatePatchOrganization } from './organizations-validations.js';

import { QueryParameterFormatting } from '../../common/middleware/common.js';
import SwaggerDocs from './organizations-swaggerDocs.js'
import e from 'express';
const router = e.Router();



router.get('/organizations', decodeIDToken, ensureAuthorized(), ValidateGetOrganization, QueryParameterFormatting, SwaggerDocs.get_Organization,
    //@ts-ignore
asyncHandler(GetOrganizations));



router.get('/organizations/:OrganizationId', decodeIDToken, ensureAuthorized(), SwaggerDocs.get_Organization_OrganizationId,
	// @ts-ignore
	asyncHandler(GetOneFromOrganizations)
);



router.post('/organizations', decodeIDToken, ensureAuthorized(),ValidatePostOrganization, SwaggerDocs.post_Organization,
	// @ts-ignore
	asyncHandler(PostOrganizations)
);



router.patch('/organizations/:OrganizationId', decodeIDToken, ensureAuthorized(),ValidatePatchOrganization, SwaggerDocs.patch_Organization_OrganizationId,
	// @ts-ignore
	asyncHandler(PatchOrganizations)
);




router.delete('/organizations/:OrganizationId', decodeIDToken, ensureAuthorized(), SwaggerDocs.delete_Organization_OrganizationId,
	// @ts-ignore
	asyncHandler(DeleteOrganizations)
);

export default router;
