import Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string().pattern(/\w{3,}/).required().messages({
        'string.pattern.base': 'Wrong username'
    }),
    password: Joi.string().min(6).max(12).required().messages({
        'string.min': 'Password must be at least 6 characters long',
        'string.max': 'Password must be at most 12 characters long'
    }),
    age: Joi.number().min(1).max(120).required().messages({
        'number.min': 'Age must be at least 1 year old',
        'number.max': 'Age must be at most 120 years old'
    })
})