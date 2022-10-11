import express from 'express'
import { createReview, deleteReview, getUsersReviews, updateReview } from '../controllers/reviews.controller'
import { reviewExists, userExists } from '../middlewares/exists.middlewares'
import { createValidators, updateValidators } from '../middlewares/reviewValidators.middlewares'

const reviewRouter = express.Router()

// Acces Routes
reviewRouter
  .delete('/:UserId/:UserReviewId', reviewExists, deleteReview)
  .get('/:userId', userExists, getUsersReviews)
  .post('/', createValidators, createReview)
  .patch('/:UserId/:UserReviewId', updateValidators, reviewExists, updateReview)

export default reviewRouter
