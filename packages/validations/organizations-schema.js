import Joi from 'joi';

/**
 * Schema for Organization
 */
const OrganizationSchema = Joi.object({
  Title: Joi.string().required(),
  State: Joi.string().required(),
  Country: Joi.string().required(),
  Tags: Joi.array().required(),
  ImageUrl: Joi.string().required(),
  Priority: Joi.number().required(),
});

export { OrganizationSchema };
