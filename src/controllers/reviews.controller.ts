import { Response, Request, NextFunction } from 'express'
import { ReviewAttributes } from '../models/review.model'
import { create } from '../services/reviewService'
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

export { createReview }
