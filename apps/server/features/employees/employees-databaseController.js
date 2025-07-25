import dataHandling from '../../functions.js';

/**
 * @typedef {object} EmployeeData
 * @property {string} FullName
 * @property {string} ImageUrl
 * @property {string} State
 * @property {string} Country
 * @property {string} Designation
 * @property {string} Description1
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
 * @returns {Promise<Array<EmployeeData>>} Returns EmployeeData
 */
const ReadEmployees = async (Where, NextIndex, Limit, orderBy) => {
	return dataHandling.Read('Employee', undefined, NextIndex, Limit, Where, orderBy);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<EmployeeData>}
 */
const ReadOneFromEmployees = async (DocId) => {
	return dataHandling.Read('Employee', DocId);
};

/**
 *
 * @param EmployeeData|object data
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const UpdateEmployees = async (data, DocId) => {
	return dataHandling.Update('Employee', data, DocId);
};

/**
 *
 * @param EmployeeData|object data
 * @param {string|undefined} DocId
 * @returns {Promise<string>}
 */
const CreateEmployees = async (data, DocId = undefined) => {
	return dataHandling.Create('Employee', data, DocId);
};

/**
 *
 * @param {string} DocId
 * @returns {Promise<boolean>}
 */
const RemoveEmployees = async (DocId) => {
	return dataHandling.Delete('Employee', DocId);
};

export {
	ReadEmployees,
	ReadOneFromEmployees,
	UpdateEmployees,
	CreateEmployees,
	RemoveEmployees,
};
