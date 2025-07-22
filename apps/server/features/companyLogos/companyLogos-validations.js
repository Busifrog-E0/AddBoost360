import Joi from "joi";
import express from "express";

import { QueryParametersSchema } from "validations";

import { CompanyLogoSchema } from "validations"


/**
 * Validate POST /companyLogo
 */
const ValidatePostCompanyLogo = (req, res, next) => {
  const { error, value } = CompanyLogoSchema.validate(req.body, { stripUnknown: true });
  if (error) return void res.status(400).json(error.details);
  req.body = value;
  return next();
};

/**
 * Validate GET /companyLogo
 */
const ValidateGetCompanyLogo = (req, res, next) => {
  const schema = QueryParametersSchema.keys({
    // Add additional query validation fields if needed
  });
  const { error, value } = schema.validate(req.query, { convert: true, stripUnknown: true });
  if (error) return void res.status(400).json({ error: error.details.map(d => d.message).join(", ") });
  req.query = value;
  return next();
};

/**
 * Validate PATCH /companyLogo
 */
const ValidatePatchCompanyLogo = (req, res, next) => {
  const { error, value } = CompanyLogoSchema.validate(req.body, { stripUnknown: true });
  if (error) return void res.status(400).json(error.details);
  req.body = value;
  return next();
};

export {
  ValidatePostCompanyLogo,
  ValidateGetCompanyLogo,
  ValidatePatchCompanyLogo,
};
