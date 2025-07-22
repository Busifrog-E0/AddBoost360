import e from 'express';

import {

	ReadOneFromEmployees,
	ReadEmployees,
	UpdateEmployees,
	CreateEmployees,
	RemoveEmployees,
} from './employees-databaseController.js';


/**
 * @typedef {import('./employees-databaseController.js').EmployeeData} EmployeeData
 */

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<EmployeeData>>}
 */
const GetOneFromEmployees = async (req, res) => {
	const { EmployeeId } = req.params;
	const data = await ReadOneFromEmployees(EmployeeId);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<Array<EmployeeData>>>}
 */
const GetEmployees = async (req, res) => {
	const { Filter, NextId, Limit, OrderBy } = req.query;
	// @ts-ignore
	const data = await ReadEmployees(Filter, NextId, Limit, OrderBy);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PostEmployees = async (req, res) => {
	await CreateEmployees(req.body);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PatchEmployees = async (req, res) => {
	const { EmployeeId } = req.params;
	await UpdateEmployees(req.body, EmployeeId);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const DeleteEmployees = async (req, res) => {
	const { EmployeeId } = req.params;
	await RemoveEmployees(EmployeeId);
	return res.json(true);
};

export {
	GetOneFromEmployees,
	GetEmployees,
	PostEmployees,
	PatchEmployees,
	DeleteEmployees,
};
