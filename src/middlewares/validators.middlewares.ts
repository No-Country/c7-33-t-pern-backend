import { Request, Response, NextFunction } from 'express'
import { validationResult, body } from 'express-validator'
// const { body, validationResult } = require('express-validator');

// Utils
import { AppError } from '../utils/appError.util'

const checkValidations = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    // [{ ..., msg }] -> [msg, msg, ...] -> 'msg. msg. msg. msg'
    const errorMessages = errors.array().map((err) => err.msg)

    const message = errorMessages.join('. ')

    return next(new AppError(message, 400))
  }

  next()
}

const createUserValidators = [
  body('name')
    .isString()
    .withMessage('Name must be a string')
    .notEmpty()
    .withMessage('Name cannot be empty')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters'),
  body('email').isEmail().withMessage('Must provide a valid email'),
  body('password')
    .isString()
    .withMessage('Password must be a string')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),
  checkValidations
]

export { createUserValidators }
