import Joi from 'joi';

/**
 * Schema for Service
 */
const ServiceSchema = Joi.object({
  Title: Joi.string().required(),
  ImageUrl: Joi.string().required(),
  Description1: Joi.string().required(),
  Description2: Joi.string().required(),
  ServiceList: Joi.array().required(),
  ButtonMessage1: Joi.string().required(),
});

export { ServiceSchema };
