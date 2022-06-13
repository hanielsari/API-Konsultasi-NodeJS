const Joi = require('joi');

const TeacherPayloadSchema =Joi.object({
    name :Joi.string().required().messages({
        'string.base' :'title harus string',
        'string.empty' :'title tidak boleh kosong',
        'any.required' :'title tidak boleh kosong',
    }),
    description: Joi.required(),
    profile_photo_path: Joi.string().required(),
    subject: Joi.string().required(),
    rate: Joi.string().required(),
})

module.exports =TeacherPayloadSchema;