const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    characters: Joi.array().required(),
    spells:Joi.array().required(),
    image:Joi.string().required()
}).unknown(true);

const movieValidate = () => {
    return (req, res, next) => {
        const result = schema.validate(req.body)
        if (result.error) {
            return res.status(400).json({code: 400, message: 'Invalid Input', error: result.error.details})
        }
        next();
    }
}


module.exports = {movieValidate}