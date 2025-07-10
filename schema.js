const Joi = require("joi");

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        price: Joi.number().required().min(0),
        country: Joi.string().required(),
        // image: Joi.object({
        //     url: Joi.string().uri().allow("", null).required()
        // }).required()
    })
})

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment : Joi.string().required()
    })
})

module.exports = { listingSchema, reviewSchema };
