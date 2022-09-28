import express from 'express'
import { getAllUsers } from '../controllers/users.controller'

// Controllers
// import { getAllUsers } from "controllers/users.controller";

// Middlewares
// const { userExists } = require("../middlewares/users.middlewares");
// const {
//   protectSession,
//   protectUsersAccount,
//   protectAdmin,
// } = require("../middlewares/auth.middlewares");

// import { createUserValidators } from "middlewares/validators.middlewares";

const usersRouter = express.Router()

// usersRouter.post("/", createUserValidators, createUser);

// usersRouter.post("/login", login);

// Protecting below endpoints
// usersRouter.use(protectSession);

usersRouter.get('/', getAllUsers)

// usersRouter.patch("/:id", userExists, protectUsersAccount, updateUser);

// usersRouter.delete("/:id", userExists, protectUsersAccount, deleteUser);

// module.exports = { usersRouter };
export default usersRouter
