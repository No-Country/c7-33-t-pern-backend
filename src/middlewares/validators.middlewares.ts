import { Request, Response, NextFunction } from 'express'
import { validationResult, body } from 'express-validator'

// Utils
import { AppError } from '../utils/appError.util'

const checkValidations = (
  req: Request,
  _res: Response,
  next: NextFunction
): any => {
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

const updateUserValidators = [
  body('status') // admin or client
    .isString()
    .withMessage('status must be a string')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isIn(['active', 'inactive'])
    .withMessage('role must be active or inactive'),
  checkValidations
]

export { createUserValidators, updateUserValidators }
