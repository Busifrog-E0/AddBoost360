import e from 'express';

import {

	ReadOneFromForms,
	ReadForms,
	UpdateForms,
	CreateForms,
	RemoveForms,
} from './forms-databaseController.js';


/**
 * @typedef {import('./forms-databaseController.js').FormData} FormData
 */

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<FormData>>}
 */
const GetOneFromForms = async (req, res) => {
	const { FormId } = req.params;
	const data = await ReadOneFromForms(FormId);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<Array<FormData>>>}
 */
const GetForms = async (req, res) => {
	const { Filter, NextId, Limit, OrderBy } = req.query;
	// @ts-ignore
	const data = await ReadForms(Filter, NextId, Limit, OrderBy);
	return res.json(data);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PostForms = async (req, res) => {
	await CreateForms(req.body);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const PatchForms = async (req, res) => {
	const { FormId } = req.params;
	await UpdateForms(req.body, FormId);
	return res.json(true);
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<e.Response<true>>}
 */
const DeleteForms = async (req, res) => {
	const { FormId } = req.params;
	await RemoveForms(FormId);
	return res.json(true);
};

export {
	GetOneFromForms,
	GetForms,
	PostForms,
	PatchForms,
	DeleteForms,
};
