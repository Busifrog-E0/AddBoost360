import e from 'express';

import {

	ReadOneFromOrganizations,
	ReadOrganizations,
	UpdateOrganizations,
	CreateOrganizations,
	RemoveOrganizations,
} from './organizations-databaseController.js';


/**
 * @typedef {import('./organizations-databaseController.js').OrganizationData} OrganizationData
 */

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<OrganizationData>>}
 */
const GetOneFromOrganizations = async (req, res) => {
	const { OrganizationId } = req.params;
	const data = await ReadOneFromOrganizations(OrganizationId);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<Array<OrganizationData>>>}
 */
const GetOrganizations = async (req, res) => {
	const { Filter, NextId, Limit, OrderBy } = req.query;
	// @ts-ignore
	const data = await ReadOrganizations(Filter, NextId, Limit, OrderBy);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PostOrganizations = async (req, res) => {
	await CreateOrganizations(req.body);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PatchOrganizations = async (req, res) => {
	const { OrganizationId } = req.params;
	await UpdateOrganizations(req.body, OrganizationId);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const DeleteOrganizations = async (req, res) => {
	const { OrganizationId } = req.params;
	await RemoveOrganizations(OrganizationId);
	return res.json(true);
};

export {
	GetOneFromOrganizations,
	GetOrganizations,
	PostOrganizations,
	PatchOrganizations,
	DeleteOrganizations,
};
