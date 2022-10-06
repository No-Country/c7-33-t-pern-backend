import { Response, Request, NextFunction } from 'express'
import { ReviewAttributes } from '../models/review.model'
import { create, destroy, getAll, update } from '../services/reviewService'
import { catchAsync } from '../utils/catchAsync.util'

const createReview = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const review: ReviewAttributes = req.body
    const data = await create(review)

    res.status(201).json({
      status: 'succes',
      data
    })
  }
)

const getUsersReviews = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const data = getAll(req.user.id)

    res.status(200).json({
      status: 'success',
      data
    })
  })

const updateReview = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { review } = req
    const reviewUpdate: ReviewAttributes = req.body
    const data = update(review, reviewUpdate)

    res.status(200).json({
      status: 'success',
      data
    })
  })

const deleteReview = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { review } = req
    await destroy(review)

    res.status(200).json({
      status: 'success',
      data: { message: 'The review was deletede succesfully' }
    })
  })

export { createReview, getUsersReviews, updateReview, deleteReview }
