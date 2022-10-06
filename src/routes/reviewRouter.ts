import express from 'express'
import { createReview } from '../controllers/reviews.controller'

const reviewRouter = express.Router()

// Acces Routes
reviewRouter.post('/:UserId', createReview)

export default reviewRouter
