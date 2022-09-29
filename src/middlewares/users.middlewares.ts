import { Request, Response, NextFunction } from 'express'

// Models
import User from '../models/user.model'

// Utils
import { catchAsync } from '../utils/catchAsync.util'
import { AppError } from '../utils/appError.util'

const userExists = catchAsync(
  async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req.params

    const user = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { id: userId }
    })

    // If user doesn't exist, send error message
    if (user == null) {
      return next(new AppError('User not found', 404))
    }

    // req.anyPropName = 'anyValue'
    req.user = user
    next()
  }
)

export {
  userExists
}
