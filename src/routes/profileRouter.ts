import express from 'express'
import { createProfile, deleteProfileById, getAllProfiles, getProfileById, updateProfileById } from '../controllers/profile.controller'
import { createValidators, updateValidators } from '../middlewares/profileValidators.middlewares'
import { profileExists, userExists } from '../middlewares/exists.middlewares'

const profileRouter = express.Router()

// rutas de acceso
profileRouter
  .delete('/:profileId', profileExists, deleteProfileById)
  .get('/', getAllProfiles)
  .get('/:profileId', profileExists, getProfileById)
  .patch('/:profileId', updateValidators, profileExists, updateProfileById)
  .post('/:userId', createValidators, userExists, createProfile)

export default profileRouter
