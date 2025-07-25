import Joi from "joi"


const FilesSchema = Joi.object({
    FileName: Joi.string().required(),
    FileType: Joi.string().required(),//.valid("image/jpeg", "application/pdf"),
    FileData: Joi.array().required(),
})

export { FilesSchema };