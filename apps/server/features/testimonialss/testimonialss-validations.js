import Joi from "joi";
import express from "express";

import { QueryParametersSchema } from "validations";

import { TestimonialsSchema } from "validations"


/**
 * Validate POST /testimonials
 */
const ValidatePostTestimonials = (req, res, next) => {
  const { error, value } = TestimonialsSchema.validate(req.body, { stripUnknown: true });
  if (error) return void res.status(400).json(error.details);
  req.body = value;
  return next();
};

/**
 * Validate GET /testimonials
 */
const ValidateGetTestimonials = (req, res, next) => {
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
 * Validate PATCH /testimonials
 */
const ValidatePatchTestimonials = (req, res, next) => {
  const { error, value } = TestimonialsSchema.validate(req.body, { stripUnknown: true });
  if (error) return void res.status(400).json(error.details);
  req.body = value;
  return next();
};

export {
  ValidatePostTestimonials,
  ValidateGetTestimonials,
  ValidatePatchTestimonials,
};
