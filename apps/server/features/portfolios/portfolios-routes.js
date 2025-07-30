import {

	GetOneFromPortfolios,
	GetPortfolios,
	PostPortfolios,
	PatchPortfolios,
	DeletePortfolios,
} from './portfolios-controller.js';


import asyncHandler from 'express-async-handler';

import { decodeIDToken, ensureAuthorized } from '../auth/auth-middleware.js';

import { ValidatePostPortfolio, ValidateGetPortfolio, ValidatePatchPortfolio } from './portfolios-validations.js';

import { QueryParameterFormatting } from '../../common/middleware/common.js';
import SwaggerDocs from './portfolios-swaggerDocs.js'
import e from 'express';
const router = e.Router();



router.get('/portfolios', ValidateGetPortfolio, QueryParameterFormatting, SwaggerDocs.get_Portfolio,
	//@ts-ignore
	asyncHandler(GetPortfolios));



router.get('/portfolios/:PortfolioId', SwaggerDocs.get_Portfolio_PortfolioId,
	// @ts-ignore
	asyncHandler(GetOneFromPortfolios)
);



router.post('/portfolios', decodeIDToken, ensureAuthorized("Admin"), ValidatePostPortfolio, SwaggerDocs.post_Portfolio,
	// @ts-ignore
	asyncHandler(PostPortfolios)
);



router.patch('/portfolios/:PortfolioId', decodeIDToken, ensureAuthorized("Admin"), ValidatePatchPortfolio, SwaggerDocs.patch_Portfolio_PortfolioId,
	// @ts-ignore
	asyncHandler(PatchPortfolios)
);




router.delete('/portfolios/:PortfolioId', decodeIDToken, ensureAuthorized("Admin"), SwaggerDocs.delete_Portfolio_PortfolioId,
	// @ts-ignore
	asyncHandler(DeletePortfolios)
);

export default router;
