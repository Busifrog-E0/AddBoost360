import {

	GetOneFromCompanyLogos,
	GetCompanyLogos,
	PostCompanyLogos,
	PatchCompanyLogos,
	DeleteCompanyLogos,
} from './companyLogos-controller.js';


import asyncHandler from 'express-async-handler';

import { decodeIDToken, ensureAuthorized } from '../auth/auth-middleware.js';

import { ValidatePostCompanyLogo, ValidateGetCompanyLogo, ValidatePatchCompanyLogo } from './companyLogos-validations.js';

import { QueryParameterFormatting } from '../../common/middleware/common.js';
import SwaggerDocs from './companyLogos-swaggerDocs.js'
import e from 'express';
const router = e.Router();



router.get('/companyLogos', ValidateGetCompanyLogo, QueryParameterFormatting, SwaggerDocs.get_CompanyLogo,
	//@ts-ignore
	asyncHandler(GetCompanyLogos));



router.get('/companyLogos/:CompanyLogoId', SwaggerDocs.get_CompanyLogo_CompanyLogoId,
	// @ts-ignore
	asyncHandler(GetOneFromCompanyLogos)
);



router.post('/companyLogos', decodeIDToken, ensureAuthorized("Admin"), ValidatePostCompanyLogo, SwaggerDocs.post_CompanyLogo,
	// @ts-ignore
	asyncHandler(PostCompanyLogos)
);



router.patch('/companyLogos/:CompanyLogoId', decodeIDToken, ensureAuthorized("Admin"), ValidatePatchCompanyLogo, SwaggerDocs.patch_CompanyLogo_CompanyLogoId,
	// @ts-ignore
	asyncHandler(PatchCompanyLogos)
);




router.delete('/companyLogos/:CompanyLogoId', decodeIDToken, ensureAuthorized("Admin"), SwaggerDocs.delete_CompanyLogo_CompanyLogoId,
	// @ts-ignore
	asyncHandler(DeleteCompanyLogos)
);

export default router;
