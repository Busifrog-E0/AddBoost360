import Joi from "joi";

/**
 * Schema for Portfolio
 */
const PortfolioSchema = Joi.object({
  Title: Joi.string().required(),
  ImageUrl: Joi.string().required(),
  LinkToProject: Joi.string(),
  Type: Joi.string().required(),
  ImpactPoints: Joi.array().items(Joi.string().trim().allow("")).required(),
  Priority: Joi.number().required(),
  ButtonMessage1: Joi.string().required(),
});

export { PortfolioSchema };
