import e from 'express';

import {

	ReadOneFromPortfolios,
	ReadPortfolios,
	UpdatePortfolios,
	CreatePortfolios,
	RemovePortfolios,
} from './portfolios-databaseController.js';


/**
 * @typedef {import('./portfolios-databaseController.js').PortfolioData} PortfolioData
 */

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<PortfolioData>>}
 */
const GetOneFromPortfolios = async (req, res) => {
	const { PortfolioId } = req.params;
	const data = await ReadOneFromPortfolios(PortfolioId);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<Array<PortfolioData>>>}
 */
const GetPortfolios = async (req, res) => {
	const { Filter, NextId, Limit, OrderBy } = req.query;
	// @ts-ignore
	const data = await ReadPortfolios(Filter, NextId, Limit, OrderBy);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PostPortfolios = async (req, res) => {
	await CreatePortfolios(req.body);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PatchPortfolios = async (req, res) => {
	const { PortfolioId } = req.params;
	await UpdatePortfolios(req.body, PortfolioId);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const DeletePortfolios = async (req, res) => {
	const { PortfolioId } = req.params;
	await RemovePortfolios(PortfolioId);
	return res.json(true);
};

export {
	GetOneFromPortfolios,
	GetPortfolios,
	PostPortfolios,
	PatchPortfolios,
	DeletePortfolios,
};
