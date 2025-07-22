import Joi from 'joi';

/**
 * Schema for Portfolio
 */
const PortfolioSchema = Joi.object({
  Title: Joi.string().required(),
  ImageUrl: Joi.string().required(),
  Description1: Joi.string().required(),
  Description2: Joi.string().required(),
  ServiceList: Joi.array().items(Joi.string().trim().allow("")).required(),
  Priority: Joi.number().required(),
});

export { PortfolioSchema };
