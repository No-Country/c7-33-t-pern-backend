import express from 'express'
import { createUser, deleteUser, getAllUsers, getUserById, login, updateCredentials } from '../controllers/users.controller'
import { protectSession } from '../middlewares/auth.middlewares'
import { userExists } from '../middlewares/exists.middlewares'
import { createOrUpdateUserValidators } from '../middlewares/userValidators.middlewares'

const usersRouter = express.Router()

// rutas de acceso
usersRouter
  .post('/login', login)
  .post('/singup', createOrUpdateUserValidators, createUser)
  .use(protectSession)
  .get('/', getAllUsers)
  .get('/:userId', userExists, getUserById)
  .patch('/', createOrUpdateUserValidators, updateCredentials)
  .delete('/', deleteUser)

export default usersRouter
