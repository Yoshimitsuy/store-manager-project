const Joi = require('joi');
require('express-async-errors');

const nameCheck = (name) => {
  const schema = Joi.string().min(5).required().messages({
    'any.required': '400|"name" is required',
    'string.min': '422|"name" length must be at least {#limit} characters long',
    'string.empty': '404|"name" cannot be empty',
  });
  
  const { error } = schema.validate(name);
  return error;
};

const isValid = (req, res, next) => {
  const { name } = req.body;
  const error = nameCheck(name);
  
  if (error) { 
    const [status, message] = error.message.split('|');
    return res.status(status).json({ message });
  }
  next();
};

module.exports = {
  nameCheck,
  isValid,
};
