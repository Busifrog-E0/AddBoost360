import Joi from 'joi';

/**
 * Schema for Service
 */
const ServiceSchema = Joi.object({
  Title: Joi.string().required(),
  ImageUrl: Joi.array()
    .items(Joi.string().uri().required())
    .min(1)
    .required(),
  Description1: Joi.string().required(),
  Description2: Joi.string().required(),
  ServiceList: Joi.array().items(Joi.string().trim().allow("")).required(),
  ButtonMessage1: Joi.string().required(),
  Priority: Joi.number().required(),
});

export { ServiceSchema };
