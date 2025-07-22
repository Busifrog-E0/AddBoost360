import logger from 'harislogger';

import dbFile from './db.config.js';
const dbClient = dbFile.getClient();
const db = dbClient.db("DbName");
import { ObjectId } from 'mongodb';
import moment from "moment-timezone";
import { ClientSession } from 'mongodb';


/**
 * @param {string} collectionName
 * @param {object} data
 * @param {string | number | ObjectId | Uint8Array | undefined} docName
 * @returns {Promise<string>}
 */
async function Create(collectionName, data, docName = undefined, index = true, session = undefined) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.CreatedIndex) {
                data.CreatedIndex = moment().valueOf();
            }
            if (!data.Index && index) {
                data.Index = `${Date.now()}`;
            }
            if (docName !== undefined) {
                const done = await db.collection(collectionName).insertOne({ ...data, "_id": new ObjectId(docName) }, { session });
                resolve(done.insertedId.toString());
            } else {
                const done = await db.collection(collectionName).insertOne(data, { session });
                resolve(done.insertedId.toString());
            }
        } catch (error) {
            logger.log(error);
            throw new Error(error);
        }
    });
}

/**
 * @param {string} collectionName
 * @param {object[]} data
 * @returns {Promise<string[]>}
 */
async function CreateMany(collectionName, data, index = true) {
    return new Promise(async (resolve, reject) => {
        try {
            data = data.map(d => {
                if (!d.CreatedIndex) {
                    d.CreatedIndex = moment().valueOf();
                }
                if (!d.Index && index) {
                    d.Index = `${Date.now()}`;
                }
                return d;
            })
            const done = await db.collection(collectionName).insertMany(data);
            resolve(Object.values(done.insertedIds).map(id => id.toString()));
        } catch (error) {
            logger.log(error);
            throw new Error(error);
        }
    });
}

/**
 * @param {string} collectionName
 * @param {Array<string>} operation
 * @param {{ LastUpdated: number | undefined; }|object} data
 * @param {object[]} dataSets
 * @param {object} options
 * @param {boolean} [options.LastUpdated]
 * @param {ClientSession | undefined} [options.session]
 * @param {string | number | ObjectId | Uint8Array | undefined} docName
 */
async function Update(collectionName, data, docName, operation = ["$set"], dataSets = [], options = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            const { LastUpdated = true, session = undefined } = options;
            if (data.LastUpdated === undefined && LastUpdated) {
                if (operation.includes("$set")) {
                    const SetIndex = operation.indexOf("$set");
                    dataSets[SetIndex - 1].LastUpdated = `${Date.now()}`;
                    data.LastUpdated = `${Date.now()}`;
                }
                else {
                    dataSets.push({ LastUpdated: `${Date.now()}` });
                    operation.push("$set");
                }
            }
            delete data._id;
            const OperationObject = { [operation[0]]: data }
            for (let index = 1; index < operation.length; index++) {
                OperationObject[operation[index]] = dataSets[index - 1];
            }
            await db.collection(collectionName).updateOne({ "_id": new ObjectId(docName) }, OperationObject, { session });
            resolve(true);
        } catch (error) {
            logger.log(error);
            throw new Error(error);
        }
    });
}

/**
 * @param {string} collectionName
 * @param {object} data
 * @param {object} filter
 * @param {object} updateOptions
 * @param {object[]} dataSets
 * @param {object} options
 * @param {boolean} [options.LastUpdated]
 * @param {ClientSession | undefined} [options.session]
 * @param {Array<string>} operation
 * @returns {Promise<true>}
 */
async function UpdateMany(collectionName, data, filter, operation = ["$set"], updateOptions = {}, dataSets = [], options = {}) {
    try {
        const { LastUpdated = true, session = undefined } = options;
        if (data.LastUpdated === undefined && LastUpdated) {
            if (operation.includes("$set")) {
                const SetIndex = operation.indexOf("$set");
                dataSets[SetIndex - 1].LastUpdated = `${Date.now()}`;
                data.LastUpdated = `${Date.now()}`;
            }
            else {
                dataSets.push({ LastUpdated: `${Date.now()}` });
                operation.push("$set");
            }
        }
        const OperationObject = { [operation[0]]: data }
        for (let index = 1; index < operation.length; index++) {
            OperationObject[operation[index]] = dataSets[index - 1];
        }
        await db.collection(collectionName).updateMany(filter, OperationObject, { session, ...updateOptions });
        return true;
    } catch (error) {
        logger.log(error);
        throw new Error(error);
    }
}

/**
 * @param {string} collectionName
 * @param {string | number | ObjectId | Uint8Array | undefined} docName
 */
async function Delete(collectionName, docName, session = undefined) {
    return new Promise(async (resolve, reject) => {
        try {
            await db.collection(collectionName).deleteOne({ "_id": new ObjectId(docName) }, { session });
            resolve(true);
        } catch (error) {
            logger.log(error);
            throw new Error(error);
        }
    });
}

async function DeleteMany(collectionName, filter) {
    return new Promise(async (resolve, reject) => {
        try {
            await db.collection(collectionName).deleteMany(filter);
            resolve(true);
        } catch (error) {
            logger.log(error);
            throw new Error(error);
        }
    });
}

/**
 * @param {string} collectionName
 * @param {string | number | ObjectId | Uint8Array | undefined} docName
 * @return {Promise<object|Array<object>|null>}
 */
async function Read(collectionName, docName, NextIndex = "", limit = 10, where = {}, orderBy = { "Index": "desc" }, session = undefined) {
    let query, NextFieldArray = ["Index"];
    try {
        if (docName === undefined || docName === "") {
            orderBy["_id"] = "desc";
            const OrderByKeys = Object.keys(orderBy);
            NextFieldArray = OrderByKeys || ["Index"];
            for (let index = 0; index < OrderByKeys.length; index++) {
                if (!where[OrderByKeys[index]]) {
                    where[OrderByKeys[index]] = { "$exists": true };
                }
            }
            if (NextIndex) {
                const orArray = GetFilterForSort(orderBy, NextIndex);
                if (where["$or"]) {
                    const FirstOr = where["$or"];
                    where["$and"] = [
                        { "$or": FirstOr },
                        { "$or": orArray }
                    ];
                    delete where["$or"];
                }
                else {
                    where["$or"] = orArray;
                }
            }

            if (limit === -1) {
                // @ts-ignore
                query = db.collection(collectionName).find(where, { session }).sort(orderBy);
            }
            else {
                // @ts-ignore
                query = db.collection(collectionName).find(where, { session }).sort(orderBy).limit(limit);
            }

            const temp = [];
            const data = await query.toArray();
            data.forEach((doc, index) => {
                const NextIdArray = NextFieldArray.map((NextField, index) => {
                    const NextFieldData = NextField.split(".").reduce((prev, cur) => {
                        return prev[cur];
                    }, doc);
                    return `${NextFieldData}--${TypeOfNextId(NextFieldData)}`;
                })
                const NextId = NextIdArray.join('---');;
                temp.push({ ...doc, "DocId": doc._id.toString(), "NextId": NextId });
            });
            return temp;
        }
        else {
            const data = await db.collection(collectionName).find({ "_id": new ObjectId(docName) }, { session }).toArray();
            if (data.length === 1) {
                return { ...data[0], "DocId": data[0]._id.toString() };
            }
            else {
                return null;
            }
        }
    }
    catch (error) {
        logger.log(error);
        throw new Error(error);
    }
}

/**
 * 
 * @param {string} collectionName 
 * @param {Array<Object>} AggregateArray 
 * @param {boolean} Raw
 * @param {string} NextIndex
 * @param {number} limit
 * @param {object} orderBy
 * @returns 
 */
async function Aggregate(collectionName, AggregateArray, Raw = false, NextIndex = "", limit = -1, orderBy = { "Index": "desc" }) {
    const data = [];
    if (!Check(NextIndex)) {
        let sortMatchObject = {};
        const OrderByKeys = Object.keys(orderBy);
        let NextField = OrderByKeys[0] || "Index";
        const [Index, nextId] = NextIndex.split('--');
        if (orderBy[NextField] === "desc") {
            sortMatchObject["$or"] = [
                { [NextField]: { "$lt": Index } },
                { [NextField]: Index, "_id": { "$lt": new ObjectId(nextId) } }]
        }
        else {
            sortMatchObject["$or"] = [
                { [NextField]: { "$gt": Index } },
                { [NextField]: Index, "_id": { "$lt": new ObjectId(nextId) } }]
        }
        AggregateArray.push({ $match: sortMatchObject });
    }
    orderBy = ConvertSortForAggregate(orderBy);
    AggregateArray.push({ $sort: orderBy });
    if (limit !== -1) {
        AggregateArray.push({ $limit: limit });
    }
    const promise = await db.collection(collectionName).aggregate(AggregateArray).toArray();
    if (Raw) return promise
    promise.forEach((doc) => {
        if (doc._id !== null && doc._id !== undefined) {
            data.push({ ...doc, "DocId": doc._id.toString(), "NextId": `${doc.Index}--${doc._id}` });
        }
        else {
            data.push({ ...doc, "DocId": "", "NextId": `${doc.Index}--` });
        }
    });
    return data;
}


const TypeOfNextId = (NextId) => {
    const type = typeof NextId;
    if (type === "string") {
        return "string"
    }
    else if (type === "number") {
        return "number"
    }
    else if (type === "boolean") {
        return "boolean"
    }
    else if (ObjectId.isValid(NextId)) {
        return "objectId"
    }
    return ""
}

/**
 * 
 * @param {string} collectionName 
 * @param {string} field 
 * @param {object} where 
 */
async function DistinctValues(collectionName, field, where = {}) {
    try {
        const data = await db.collection(collectionName).distinct(field, where);
        return data;
    } catch (error) {
        logger.log(error);
        throw new Error(error);
    }
}

const Check = (/** @type {string | null | undefined} */ Field) => {
    if (Field === null || Field === undefined || Field === "") {
        return true;
    }
    else {
        return false;
    }
}

/**
 * 
 * @param {object} OrderBy 
 * @param {string} NextId 
 */
const GetFilterForSort = (OrderBy, NextId) => {
    const NextFieldArray = Object.keys(OrderBy);
    const orArray = [];
    const opArray = NextFieldArray.map((NextField, index) => {
        const order = OrderBy[NextField];
        if (order === "desc" || order === "1" || order === 1) {
            return "$lt";
        }
        else {
            return "$gt";
        }
    })
    const IndexArray = NextId.split("---").map(Index => {
        const [rawIndex, type] = Index.split("--");
        //@ts-ignore
        return ConvertToFieldType(rawIndex, type);
    });
    for (let i = 0; i < NextFieldArray.length; i++) {
        const NextField = NextFieldArray[i];
        orArray[i] = { [NextField]: { [opArray[i]]: IndexArray[i] } };
        for (let j = 0; j < i; j++) {
            const element = NextFieldArray[j];
            //@ts-ignore
            orArray[i][element] = IndexArray[j];
        }
    }
    return orArray;
}

/**
 * 
 * @param {string} value 
 * @param {"string"|"number"|"objectId"|"boolean"} type 
 */
const ConvertToFieldType = (value, type) => {
    switch (type) {
        case 'string':
            return value;

        case 'number': {
            const n = parseFloat(value);
            if (Number.isNaN(n)) throw new Error(`Cannot convert "${value}" to Number`);
            return n;
        }
        case 'objectId':
            return new ObjectId(value);
        case 'boolean':
            return value === 'true';

    }
}

/**
 * @param {number} b
 * @param {number} c
 */
function substract(b, c) {
    let tens = [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000]

    let b1 = b.toString().split(".")
    let b1_max = 0
    if (b1.length == 2) {
        b1_max = b1[1].length
    }

    let c1 = c.toString().split(".")
    let c1_max = 0
    if (c1.length == 2) {
        c1_max = c1[1].length
    }

    let max_len = 0
    let max_val = 0
    if (b1_max > c1_max) {
        max_val = tens[b1_max - 1]
        max_len = b1_max
    } else {
        max_len = c1_max
        max_val = tens[c1_max - 1]
    }

    let fv = 0
    if (max_len == 0) {
        //console.log("non decimals")
        max_val = 1
        fv = b - c
    } else {

        fv = parseFloat((((b * max_val) - (c * max_val)) / max_val).toFixed(max_len))

    }
    return fv
}

const ConvertSortForAggregate = (orderBy) => {
    return Object.keys(orderBy).reduce((acc, field) => {
        acc[field] = orderBy[field] === 'asc' ? 1 : -1;
        return acc;
    }, {});
}

const TypeSetting = (/** @type {string} */ FieldName, /** @type {string} */ FieldData, /** @type {{ [x: string]: any; index?: string; }} */ FieldTypeObj) => {
    if (!FieldTypeObj[FieldName]) {
        return FieldData;
    }
    switch (FieldTypeObj[FieldName]) {
        case "string":
            return String(FieldData);
        case "number":
            return Number(FieldData);
        case "array":
            return FieldData.split(",");
        default:
            return String(FieldData)
    }
}



async function ReadCount(collectionName, where = {}) {

    return new Promise(async function (resolve, reject) {
        try {
            const data = await db.collection(collectionName).countDocuments(where);
            resolve(data);
        } catch (error) {
            logger.log(error);
            throw new Error(error);
        }
    });
}


export default {
    Create,
    CreateMany,
    Update,
    UpdateMany,
    Delete,
    Read,
    ReadCount,
    Aggregate,
    Check,
    ObjectId,
    db,
    dbClient,
    DistinctValues,
    substract,
    DeleteMany,
};
// 345577194

