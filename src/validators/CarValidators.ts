import * as joi from 'joi'



export const CarValidators = joi.object({
    brand: joi.string().min(1).max(20).required().messages({
        'string.empty': 'Brand is required',
        'string.min': 'Brand must be at least 1 character',
        'string.max': 'Brand must be at most 20 characters'
    }),
    model: joi.string().min(1).max(20).required().messages({
        'string.empty': 'Model is required',
        'string.min': 'Model must be at least 1 character',
        'string.max': 'Model must be at most 20 characters'
    }),
    year: joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Year must be a number',
        'number.min': 'Year must be at least 1990',
        'number.max': 'Year must be at most ' + new Date().getFullYear()
    }),
    price: joi.number().min(0).required().messages({
        'number.base': 'Price must be a number',
        'number.min': 'Price cannot be negative'
    }),
})