import Joi from "joi";
import express from "express";

import { QueryParametersSchema } from "validations";

import { OrganizationSchema } from "validations"


/**
 * Validate POST /organization
 */
const ValidatePostOrganization = (req, res, next) => {
  const { error, value } = OrganizationSchema.validate(req.body, { stripUnknown: true });
  if (error) return void res.status(400).json(error.details);
  req.body = value;
  return next();
};

/**
 * Validate GET /organization
 */
const ValidateGetOrganization = (req, res, next) => {
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
 * Validate PATCH /organization
 */
const ValidatePatchOrganization = (req, res, next) => {
  const { error, value } = OrganizationSchema.validate(req.body, { stripUnknown: true });
  if (error) return void res.status(400).json(error.details);
  req.body = value;
  return next();
};

export {
  ValidatePostOrganization,
  ValidateGetOrganization,
  ValidatePatchOrganization,
};
