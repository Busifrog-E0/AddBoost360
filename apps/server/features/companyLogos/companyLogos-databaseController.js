import dataHandling from '../../functions.js';

/**
 * @typedef {object} CompanyLogoData
 * @property {string} Title
 * @property {string} ImageUrl
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
 * @returns {Promise<Array<CompanyLogoData>>} Returns CompanyLogoData
 */
const ReadCompanyLogos = async (Where, NextIndex, Limit, orderBy) => {
	return dataHandling.Read('CompanyLogo', undefined, NextIndex, Limit, Where, orderBy);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<CompanyLogoData>}
 */
const ReadOneFromCompanyLogos = async (DocId) => {
	return dataHandling.Read('CompanyLogo', DocId);
};

/**
 *
 * @param CompanyLogoData|object data
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const UpdateCompanyLogos = async (data, DocId) => {
	return dataHandling.Update('CompanyLogo', data, DocId);
};

/**
 *
 * @param CompanyLogoData|object data
 * @param {string|undefined} DocId
 * @returns {Promise<string>}
 */
const CreateCompanyLogos = async (data, DocId = undefined) => {
	return dataHandling.Create('CompanyLogo', data, DocId);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const RemoveCompanyLogos = async (DocId) => {
	return dataHandling.Delete('CompanyLogo', DocId);
};

export {
	ReadCompanyLogos,
	ReadOneFromCompanyLogos,
	UpdateCompanyLogos,
	CreateCompanyLogos,
	RemoveCompanyLogos,
};
