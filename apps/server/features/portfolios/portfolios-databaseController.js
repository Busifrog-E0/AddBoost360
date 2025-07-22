import dataHandling from '../../functions.js';

/**
 * @typedef {object} PortfolioData
 * @property {string} Title
 * @property {string} ImageUrl
 * @property {string} Description1
 * @property {string} Description2
 * @property {array} ServiceList
 * @property {number} Priority
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
 * @returns {Promise<Array<PortfolioData>>} Returns PortfolioData
 */
const ReadPortfolios = async (Where, NextIndex, Limit, orderBy) => {
	return dataHandling.Read('Portfolio', undefined, NextIndex, Limit, Where, orderBy);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<PortfolioData>}
 */
const ReadOneFromPortfolios = async (DocId) => {
	return dataHandling.Read('Portfolio', DocId);
};

/**
 *
 * @param PortfolioData|object data
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const UpdatePortfolios = async (data, DocId) => {
	return dataHandling.Update('Portfolio', data, DocId);
};

/**
 *
 * @param PortfolioData|object data
 * @param {string|undefined} DocId
 * @returns {Promise<string>}
 */
const CreatePortfolios = async (data, DocId = undefined) => {
	return dataHandling.Create('Portfolio', data, DocId);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const RemovePortfolios = async (DocId) => {
	return dataHandling.Delete('Portfolio', DocId);
};

export {
	ReadPortfolios,
	ReadOneFromPortfolios,
	UpdatePortfolios,
	CreatePortfolios,
	RemovePortfolios,
};
