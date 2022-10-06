import Review, { ReviewAttributes } from '../models/review.model'

const create = async (review: ReviewAttributes): Promise<Review> => {
  return await Review.create({
    comment: review.comment,
    value: review.value,
    UserId: review.UserId,
    UserReviewId: review.UserReviewId
  })
}

const getAll = async (UserReviewId: number): Promise<Review[]> => {
  return await Review.findAll({ where: { UserReviewId } })
}

const update = async (review: Review, reviewUpdate: ReviewAttributes): Promise<Review> => {
  return await review.update({ comment: reviewUpdate.comment, value: reviewUpdate.value })
}

const destroy = async (review: Review): Promise<void> => {
  await review.destroy()
}

export { create, getAll, update, destroy }
