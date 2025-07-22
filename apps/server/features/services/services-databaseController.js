import dataHandling from '../../functions.js';

/**
 * @typedef {object} ServiceData
 * @property {string} Title
 * @property {string} ImageUrl
 * @property {string} Description1
 * @property {string} Description2
 * @property {array} ServiceList
 * @property {string} ButtonMessage1
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
 * @returns {Promise<Array<ServiceData>>} Returns ServiceData
 */
const ReadServices = async (Where, NextIndex, Limit, orderBy) => {
	return dataHandling.Read('Service', undefined, NextIndex, Limit, Where, orderBy);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<ServiceData>}
 */
const ReadOneFromServices = async (DocId) => {
	return dataHandling.Read('Service', DocId);
};

/**
 *
 * @param ServiceData|object data
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const UpdateServices = async (data, DocId) => {
	return dataHandling.Update('Service', data, DocId);
};

/**
 *
 * @param ServiceData|object data
 * @param {string|undefined} DocId
 * @returns {Promise<string>}
 */
const CreateServices = async (data, DocId = undefined) => {
	return dataHandling.Create('Service', data, DocId);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const RemoveServices = async (DocId) => {
	return dataHandling.Delete('Service', DocId);
};

export {
	ReadServices,
	ReadOneFromServices,
	UpdateServices,
	CreateServices,
	RemoveServices,
};
