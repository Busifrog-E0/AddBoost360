import e from 'express';

import {

	ReadOneFromCompanyLogos,
	ReadCompanyLogos,
	UpdateCompanyLogos,
	CreateCompanyLogos,
	RemoveCompanyLogos,
} from './companyLogos-databaseController.js';


/**
 * @typedef {import('./companyLogos-databaseController.js').CompanyLogoData} CompanyLogoData
 */

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<CompanyLogoData>>}
 */
const GetOneFromCompanyLogos = async (req, res) => {
	const { CompanyLogoId } = req.params;
	const data = await ReadOneFromCompanyLogos(CompanyLogoId);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<Array<CompanyLogoData>>>}
 */
const GetCompanyLogos = async (req, res) => {
	const { Filter, NextId, Limit, OrderBy } = req.query;
	// @ts-ignore
	const data = await ReadCompanyLogos(Filter, NextId, Limit, OrderBy);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PostCompanyLogos = async (req, res) => {
	await CreateCompanyLogos(req.body);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PatchCompanyLogos = async (req, res) => {
	const { CompanyLogoId } = req.params;
	await UpdateCompanyLogos(req.body, CompanyLogoId);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const DeleteCompanyLogos = async (req, res) => {
	const { CompanyLogoId } = req.params;
	await RemoveCompanyLogos(CompanyLogoId);
	return res.json(true);
};

export {
	GetOneFromCompanyLogos,
	GetCompanyLogos,
	PostCompanyLogos,
	PatchCompanyLogos,
	DeleteCompanyLogos,
};
