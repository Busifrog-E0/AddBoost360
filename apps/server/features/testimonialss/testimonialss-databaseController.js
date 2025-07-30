import dataHandling from '../../functions.js';

/**
 * @typedef {object} TestimonialsData
 * @property {string} Title
 * @property {string} Description1
 * @property {string} ImageUrl
 * @property {number} Priority
 * @property {number} Designation
 * @property {string} DocId
 * @property {string} CreatedIndex
 * @property {number} Index
 */

/**
 *
 * @param {undefined|object} Where
 * @param {undefined|string} NextIndex
 * @param {undefined|number} Limit
 * @param {undefined|object} orderBy
 * @returns {Promise<Array<TestimonialsData>>} Returns TestimonialsData
 */
const ReadTestimonialss = async (Where, NextIndex, Limit, orderBy) => {
	return dataHandling.Read('Testimonials', undefined, NextIndex, Limit, Where, orderBy);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<TestimonialsData>}
 */
const ReadOneFromTestimonialss = async (DocId) => {
	return dataHandling.Read('Testimonials', DocId);
};

/**
 *
 * @param TestimonialsData|object data
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const UpdateTestimonialss = async (data, DocId) => {
	return dataHandling.Update('Testimonials', data, DocId);
};

/**
 *
 * @param TestimonialsData|object data
 * @param {string|undefined} DocId
 * @returns {Promise<string>}
 */
const CreateTestimonialss = async (data, DocId = undefined) => {
	return dataHandling.Create('Testimonials', data, DocId);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const RemoveTestimonialss = async (DocId) => {
	return dataHandling.Delete('Testimonials', DocId);
};

export {
	ReadTestimonialss,
	ReadOneFromTestimonialss,
	UpdateTestimonialss,
	CreateTestimonialss,
	RemoveTestimonialss,
};
