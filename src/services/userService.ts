import { Model } from 'sequelize'
import bcrypt from 'bcryptjs'
import User from '../models/user.model'
import { UserAttributes, UserCreationAttributes } from '../interfaces/types'
// import { AppError } from '../utils/appError.util'

const create = async (user: UserAttributes): Promise<Model<UserAttributes, UserCreationAttributes>> => {
  const hashedPassword = await passwordHasher(user.password)
  const newUser = await User.create({
    email: user.email,
    password: hashedPassword
  })
  return newUser
}

const update = async (user: Model<UserAttributes, UserCreationAttributes>, userUpdate: UserAttributes): Promise<Model<UserAttributes, UserCreationAttributes>> => {
  const data = await user.update(userUpdate)
  return data
}

const passwordHasher = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

const getById = async (id: number): Promise<Model<UserAttributes, UserCreationAttributes> | null> => {
  const user = await User.findByPk(id, {
    attributes: {
      exclude: ['password']
    }
  })
  return user
}

const getAll = async (): Promise<Array<Model<UserAttributes, UserCreationAttributes>>> => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
    where: { status: 'active' }
  })
  return users
}

export {
  create,
  update,
  passwordHasher,
  getById,
  getAll
}
