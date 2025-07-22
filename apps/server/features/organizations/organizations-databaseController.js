import dataHandling from '../../functions.js';

/**
 * @typedef {object} OrganizationData
 * @property {string} Title
 * @property {string} State
 * @property {string} Country
 * @property {array} Tags
 * @property {string} ImageUrl
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
 * @returns {Promise<Array<OrganizationData>>} Returns OrganizationData
 */
const ReadOrganizations = async (Where, NextIndex, Limit, orderBy) => {
	return dataHandling.Read('Organization', undefined, NextIndex, Limit, Where, orderBy);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<OrganizationData>}
 */
const ReadOneFromOrganizations = async (DocId) => {
	return dataHandling.Read('Organization', DocId);
};

/**
 *
 * @param OrganizationData|object data
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const UpdateOrganizations = async (data, DocId) => {
	return dataHandling.Update('Organization', data, DocId);
};

/**
 *
 * @param OrganizationData|object data
 * @param {string|undefined} DocId
 * @returns {Promise<string>}
 */
const CreateOrganizations = async (data, DocId = undefined) => {
	return dataHandling.Create('Organization', data, DocId);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const RemoveOrganizations = async (DocId) => {
	return dataHandling.Delete('Organization', DocId);
};

export {
	ReadOrganizations,
	ReadOneFromOrganizations,
	UpdateOrganizations,
	CreateOrganizations,
	RemoveOrganizations,
};
