import {

	GetOneFromTestimonialss,
	GetTestimonialss,
	PostTestimonialss,
	PatchTestimonialss,
	DeleteTestimonialss,
} from './testimonialss-controller.js';


import asyncHandler from 'express-async-handler';

import { decodeIDToken, ensureAuthorized } from '../auth/auth-middleware.js';

import { ValidatePostTestimonials, ValidateGetTestimonials, ValidatePatchTestimonials } from './testimonialss-validations.js';

import { QueryParameterFormatting } from '../../common/middleware/common.js';
import SwaggerDocs from './testimonialss-swaggerDocs.js'
import e from 'express';
const router = e.Router();



router.get('/testimonialss', decodeIDToken, ensureAuthorized(), ValidateGetTestimonials, QueryParameterFormatting, SwaggerDocs.get_Testimonials,
    //@ts-ignore
asyncHandler(GetTestimonialss));



router.get('/testimonialss/:TestimonialsId', decodeIDToken, ensureAuthorized(), SwaggerDocs.get_Testimonials_TestimonialsId,
	// @ts-ignore
	asyncHandler(GetOneFromTestimonialss)
);



router.post('/testimonialss', decodeIDToken, ensureAuthorized(),ValidatePostTestimonials, SwaggerDocs.post_Testimonials,
	// @ts-ignore
	asyncHandler(PostTestimonialss)
);



router.patch('/testimonialss/:TestimonialsId', decodeIDToken, ensureAuthorized(),ValidatePatchTestimonials, SwaggerDocs.patch_Testimonials_TestimonialsId,
	// @ts-ignore
	asyncHandler(PatchTestimonialss)
);




router.delete('/testimonialss/:TestimonialsId', decodeIDToken, ensureAuthorized(), SwaggerDocs.delete_Testimonials_TestimonialsId,
	// @ts-ignore
	asyncHandler(DeleteTestimonialss)
);

export default router;
