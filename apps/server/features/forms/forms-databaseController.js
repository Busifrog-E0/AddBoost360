import dataHandling from '../../functions.js';

/**
 * @typedef {object} FormData
 * @property {string} FocusArea
 * @property {string} FullName
 * @property {string} Email
 * @property {string} Phone
 * @property {string} BusinessName
 * @property {number} PreferredDate
 * @property {string} Notes
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
 * @returns {Promise<Array<FormData>>} Returns FormData
 */
const ReadForms = async (Where, NextIndex, Limit, orderBy) => {
	return dataHandling.Read('Form', undefined, NextIndex, Limit, Where, orderBy);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<FormData>}
 */
const ReadOneFromForms = async (DocId) => {
	return dataHandling.Read('Form', DocId);
};

/**
 *
 * @param FormData|object data
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const UpdateForms = async (data, DocId) => {
	return dataHandling.Update('Form', data, DocId);
};

/**
 *
 * @param FormData|object data
 * @param {string|undefined} DocId
 * @returns {Promise<string>}
 */
const CreateForms = async (data, DocId = undefined) => {
	return dataHandling.Create('Form', data, DocId);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const RemoveForms = async (DocId) => {
	return dataHandling.Delete('Form', DocId);
};

export {
	ReadForms,
	ReadOneFromForms,
	UpdateForms,
	CreateForms,
	RemoveForms,
};
