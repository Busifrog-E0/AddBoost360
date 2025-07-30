import e from "express";
import onFinished from 'on-finished';
import { QueryParametersSchema } from "validations";


/**
 * @param {e.Request} req 
 * @param {e.Response} res 
 * @param {e.NextFunction} next 
 */
const ValidateGetEntity = async (req, res, next) => {


    const { error, value } = QueryParametersSchema.validate(req.query, { "convert": true, "stripUnknown": true });
    if (error) {
        const message = error.details.map((detail) => detail.message).join(', ');
        return void res.status(400).json(error);
    }

    req.query = value;
    next();
}


const QueryParameterFormatting = (req, res, next) => {
    const returnObject = {
        NextId: req.query.NextId,
        Limit: req.query.Limit,
        Keyword: req.query.Keyword,
        OrderBy: OrderByFormatting(req.query.OrderBy),
        Filter: {},
    }
    delete req.query.NextId;
    delete req.query.Limit;
    delete req.query.OrderBy;
    delete req.query.Keyword;


    for (const key in req.query) {
        if (Object.hasOwnProperty.call(req.query, key)) {
            const element = req.query[key];
            if (Array.isArray(element)) {
                returnObject["Filter"][key] = { "$in": element };
            }
            else {
                returnObject["Filter"][key] = element;
            }
        }
    }

    req.query = returnObject;

    return next();

}

/**
 * 
 * @param {string|Array<string>} OrderBy 
 * @returns {object}
 */
const OrderByFormatting = (OrderBy = []) => {
    const returnObject = {};
    if (!Array.isArray(OrderBy)) {
        OrderBy = [OrderBy];
    }

    for (let index = 0; index < OrderBy.length; index++) {
        const element = OrderBy[index];
        if (element[0] === "-") {
            returnObject[element.substring(1)] = "asc";
        }
        else {
            returnObject[element] = "desc";
        }
    }
    return returnObject;
}

const SetUserIdInQuery = (req, res, next) => {
    req.query.UserId = req.user.UserId;
    return next();
}


const SetActiveInQueryIfUser = (req, res, next) => {
    if (req.user.Role === "User") {
        req.query.Active = true;
    }
    return next();
}


const CheckSameUser = (req, res, next) => {
    if (req.user.Role === "User" && req.user.UserId !== req.params.UserId) {
        return res.status(402).json("No Access")
    }
    return next();
}


export function requestLogger(req, res, next) {
    const startHrTime = process.hrtime();
 

    onFinished(res, () => {
        const [sec, nanosec] = process.hrtime(startHrTime);
        const durationMs = sec * 1e3 + nanosec * 1e-6;

        const logEntry = {
            timestamp: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date()),
            clientIp: req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            method: req.method,
            path: req.originalUrl || req.url,
            statusCode: res.statusCode,
            durationMs: Number(durationMs.toFixed(3)),
            userId: req.user?.UserId || 'anonymous',
        };

        console.log(JSON.stringify(logEntry));
    });

    next();
}


export {
 ValidateGetEntity, QueryParameterFormatting,
    SetUserIdInQuery, CheckSameUser, SetActiveInQueryIfUser
}