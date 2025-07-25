import Joi from "joi";
import express from "express";

import { QueryParametersSchema } from "validations";

import { EmployeeSchema } from "validations"


/**
 * Validate POST /employee
 */
const ValidatePostEmployee = (req, res, next) => {
  const { error, value } = EmployeeSchema.validate(req.body, { stripUnknown: true });
  if (error) return void res.status(400).json(error.details);
  req.body = value;
  return next();
};

/**
 * Validate GET /employee
 */
const ValidateGetEmployee = (req, res, next) => {
  const schema = QueryParametersSchema
  // .keys({
  //   // Add additional query validation fields if needed
  // });
  const { error, value } = schema.validate(req.query, { convert: true, stripUnknown: true });
  if (error) return void res.status(400).json({ error: error.details.map(d => d.message).join(", ") });
  req.query = value;
  return next();
};

/**
 * Validate PATCH /employee
 */
const ValidatePatchEmployee = (req, res, next) => {
  const { error, value } = EmployeeSchema.validate(req.body, { stripUnknown: true });
  if (error) return void res.status(400).json(error.details);
  req.body = value;
  return next();
};

export {
  ValidatePostEmployee,
  ValidateGetEmployee,
  ValidatePatchEmployee,
};
