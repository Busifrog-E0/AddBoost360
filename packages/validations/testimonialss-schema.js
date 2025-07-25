import Joi from 'joi';

/**
 * Schema for Testimonials
 */
const TestimonialsSchema = Joi.object({
  Title: Joi.string().required(),
  Description1: Joi.string().required(),
  ImageUrl: Joi.string().required(),
  Priority: Joi.number().required(),
});

export { TestimonialsSchema };
