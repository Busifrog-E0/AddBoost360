import Joi from 'joi';

/**
 * Schema for Form
 */
const FormSchema = Joi.object({
  FocusArea: Joi.string().required(),
  FullName: Joi.string().required(),
  Email: Joi.string().required(),
  Phone: Joi.string().required(),
  BusinessName: Joi.string().allow(""),
  PreferredDate: Joi.number(),
  Notes: Joi.string().allow(""),
});

export { FormSchema };
