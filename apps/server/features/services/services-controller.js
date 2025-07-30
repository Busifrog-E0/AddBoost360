import e from 'express';

import {

	ReadOneFromServices,
	ReadServices,
	UpdateServices,
	CreateServices,
	RemoveServices,
} from './services-databaseController.js';


/**
 * @typedef {import('./services-databaseController.js').ServiceData} ServiceData
 */

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<ServiceData>>}
 */
const GetOneFromServices = async (req, res) => {
	const { ServiceId } = req.params;
	const data = await ReadOneFromServices(ServiceId);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<Array<ServiceData>>>}
 */
const GetServices = async (req, res) => {
	const { Filter, NextId, Limit, OrderBy } = req.query;
	// @ts-ignore
	const data = await ReadServices(Filter, NextId, Limit, OrderBy);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PostServices = async (req, res) => {
	await CreateServices(req.body);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PatchServices = async (req, res) => {
	const { ServiceId } = req.params;
	await UpdateServices(req.body, ServiceId);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const DeleteServices = async (req, res) => {
	const { ServiceId } = req.params;
	await RemoveServices(ServiceId);
	return res.json(true);
};

export {
	GetOneFromServices,
	GetServices,
	PostServices,
	PatchServices,
	DeleteServices,
};
