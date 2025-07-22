declare module 'validations' {
  import Joi from 'joi';

  export const QueryParametersSchema: Joi.ObjectSchema;

  // EXPORTS HERE
  // Service-related Schema
  export const ServiceSchema: Joi.ObjectSchema;

  // Other schemas
  export const FilesSchema: Joi.ObjectSchema;


}
