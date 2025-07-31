import Joi from 'joi';

/**
 * Schema for Employee
 */
const EmployeeSchema = Joi.object({
  FullName: Joi.string().required(),
  ImageUrl: Joi.string().required(),
  State: Joi.string().required(),
  Country: Joi.string().required(),
  Designation: Joi.string().required(),
  ID: Joi.string().required(),
  Description1: Joi.string().required(),
  Priority: Joi.number().required(),
});

export { EmployeeSchema };
