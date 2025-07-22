import {

	GetOneFromEmployees,
	GetEmployees,
	PostEmployees,
	PatchEmployees,
	DeleteEmployees,
} from './employees-controller.js';


import asyncHandler from 'express-async-handler';

import { decodeIDToken, ensureAuthorized } from '../auth/auth-middleware.js';

import { ValidatePostEmployee, ValidateGetEmployee, ValidatePatchEmployee } from './employees-validations.js';

import { QueryParameterFormatting } from '../../common/middleware/common.js';
import SwaggerDocs from './employees-swaggerDocs.js'
import e from 'express';
const router = e.Router();



router.get('/employees', decodeIDToken, ensureAuthorized(), ValidateGetEmployee, QueryParameterFormatting, SwaggerDocs.get_Employee,
    //@ts-ignore
asyncHandler(GetEmployees));



router.get('/employees/:EmployeeId', decodeIDToken, ensureAuthorized(), SwaggerDocs.get_Employee_EmployeeId,
	// @ts-ignore
	asyncHandler(GetOneFromEmployees)
);



router.post('/employees', decodeIDToken, ensureAuthorized(),ValidatePostEmployee, SwaggerDocs.post_Employee,
	// @ts-ignore
	asyncHandler(PostEmployees)
);



router.patch('/employees/:EmployeeId', decodeIDToken, ensureAuthorized(),ValidatePatchEmployee, SwaggerDocs.patch_Employee_EmployeeId,
	// @ts-ignore
	asyncHandler(PatchEmployees)
);




router.delete('/employees/:EmployeeId', decodeIDToken, ensureAuthorized(), SwaggerDocs.delete_Employee_EmployeeId,
	// @ts-ignore
	asyncHandler(DeleteEmployees)
);

export default router;
