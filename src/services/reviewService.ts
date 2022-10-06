import Review, { ReviewAttributes } from '../models/review.model'

const create = async (review: ReviewAttributes): Promise<Review> => {
  const newReview = await Review.create({
    comment: review.comment,
    value: review.value,
    UserId: review.UserId,
    UserReviewId: review.UserReviewId
  })

  return newReview
}

export { create }
