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

    if (user == null) {
      return next(new AppError('User not found', 404))
    }
<<<<<<< Updated upstream

    // req.anyPropName = 'anyValue'
<<<<<<< Updated upstream
    req.user = user
=======
    //  req.user = user; => Por revisar
=======
    req.user = user
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    next()
  }
)

export {
  userExists
}
