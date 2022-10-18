import { body } from 'express-validator'
// Utils
import checkValidations from './checkValidators.middlewares'

const createUpdateValidators = [
  body('name')
    .isString()
    .withMessage('AccessLevel must be a string')
    .notEmpty()
    .withMessage('AccessLevel cannot be empty'),
  checkValidations
]

export { createUpdateValidators }
