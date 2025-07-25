import Joi from 'joi';

/**
 * Schema for CompanyLogo
 */
const CompanyLogoSchema = Joi.object({
  Title: Joi.string().required(),
  ImageUrl: Joi.string().required(),
  Priority: Joi.number().required(),
});

export { CompanyLogoSchema };
