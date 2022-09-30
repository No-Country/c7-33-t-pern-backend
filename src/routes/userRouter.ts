import express from 'express'
<<<<<<< Updated upstream
import { createUser, getAllUsers, getUserById, updateById } from '../controllers/users.controller'
import { userExists } from '../middlewares/users.middlewares'
=======
<<<<<<< Updated upstream
import { getAllUsers } from '../controllers/users.controller'
>>>>>>> Stashed changes

// Controllers
// import { getAllUsers } from "controllers/users.controller";

// Middlewares
// const { userExists } = require("../middlewares/users.middlewares");
// const {
//   protectSession,
//   protectUsersAccount,
//   protectAdmin,
// } = require("../middlewares/auth.middlewares");

import { createUserValidators, updateUserValidators } from '../middlewares/validators.middlewares'

const usersRouter = express.Router()

// rutas de acceso
usersRouter.post('/', createUserValidators, createUser)

// usersRouter.post("/login", login);

// Protecting below endpoints
// usersRouter.use(protectSession);

usersRouter.get('/', getAllUsers)
usersRouter.get('/:userId', userExists, getUserById)
usersRouter.patch('/:userId', updateUserValidators, userExists, updateById)

// usersRouter.patch("/:id", userExists, protectUsersAccount, updateUser);

// usersRouter.delete("/:id", userExists, protectUsersAccount, deleteUser);
=======
import { createUser, getAllUsers, getUserById, updateById } from '../controllers/users.controller'
import { userExists } from '../middlewares/users.middlewares'
import { createUserValidators, updateUserValidators } from '../middlewares/validators.middlewares'

const usersRouter = express.Router()

// rutas de acceso
usersRouter
  .get('/', getAllUsers)
  .get('/:userId', userExists, getUserById)
  .post('/', createUserValidators, createUser)
  .patch('/:userId', updateUserValidators, userExists, updateById)
>>>>>>> Stashed changes

export default usersRouter
