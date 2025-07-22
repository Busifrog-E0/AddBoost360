declare module 'validations' {
  import Joi from 'joi';

  export const QueryParametersSchema: Joi.ObjectSchema;

  // EXPORTS HERE
// Testimonials-related Schema
export const  TestimonialsSchema  : Joi.ObjectSchema;

// CompanyLogo-related Schema
export const  CompanyLogoSchema  : Joi.ObjectSchema;

// Form-related Schema
export const  FormSchema  : Joi.ObjectSchema;

// Organization-related Schema
export const  OrganizationSchema  : Joi.ObjectSchema;

// Portfolio-related Schema
export const  PortfolioSchema  : Joi.ObjectSchema;

  // Service-related Schema
  export const ServiceSchema: Joi.ObjectSchema;

  // Other schemas
  export const FilesSchema: Joi.ObjectSchema;


}
