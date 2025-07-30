import e from 'express';

import {

	ReadOneFromTestimonialss,
	ReadTestimonialss,
	UpdateTestimonialss,
	CreateTestimonialss,
	RemoveTestimonialss,
} from './testimonialss-databaseController.js';


/**
 * @typedef {import('./testimonialss-databaseController.js').TestimonialsData} TestimonialsData
 */

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<TestimonialsData>>}
 */
const GetOneFromTestimonialss = async (req, res) => {
	const { TestimonialsId } = req.params;
	const data = await ReadOneFromTestimonialss(TestimonialsId);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<Array<TestimonialsData>>>}
 */
const GetTestimonialss = async (req, res) => {
	const { Filter, NextId, Limit, OrderBy } = req.query;
	// @ts-ignore
	const data = await ReadTestimonialss(Filter, NextId, Limit, OrderBy);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PostTestimonialss = async (req, res) => {
	await CreateTestimonialss(req.body);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PatchTestimonialss = async (req, res) => {
	const { TestimonialsId } = req.params;
	await UpdateTestimonialss(req.body, TestimonialsId);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const DeleteTestimonialss = async (req, res) => {
	const { TestimonialsId } = req.params;
	await RemoveTestimonialss(TestimonialsId);
	return res.json(true);
};

export {
	GetOneFromTestimonialss,
	GetTestimonialss,
	PostTestimonialss,
	PatchTestimonialss,
	DeleteTestimonialss,
};
