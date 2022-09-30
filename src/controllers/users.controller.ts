import { Response, Request, NextFunction } from 'express'
import { UserAttributes } from '../models/user.model'
import { getAll, create, update } from '../services/userService'
import { catchAsync } from '../utils/catchAsync.util'

const getAllUsers = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  const data = await getAll()
  res.status(200).json({
    status: 'success',
    data
  })
}
)

const getUserById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const { user } = req
  res.status(200).json({
    status: 'success',
    data: user
  })
})

const createUser = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const user: UserAttributes = req.body
  const data = await create(user)
  res.status(201).json({
    status: 'success',
    data
  })
})

const updateById = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  const userUpdate: UserAttributes = req.body
  const { user } = req
  const data = await update(user, userUpdate)
  res.status(200).json({
    status: 'success',
    data
  })
})

export { createUser, getAllUsers, getUserById, updateById }
