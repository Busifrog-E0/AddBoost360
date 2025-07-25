import { FilesSchema } from "validations";




const ValidatePostFilesAdmin = async (req, res, next) => {
    const Result = FilesSchema.validate(req.body, { stripUnknown: true });
    if (Result.error) {
        return res.status(400).json(Result.error.details)
    }
    else {
        req.body = Result.value;
        return next();
    }

}


export {
    ValidatePostFilesAdmin,
}