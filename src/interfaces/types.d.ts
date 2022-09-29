import { Model } from 'sequelize'
import { Optional } from 'sequelize/types'
export interface DataBaseType {
  host: string
  name: string
  password: string
  port: number
  user: string
}

type role = 'admin' | 'client'
type status = 'active' | 'inactive'
export interface UserAttributes{
  id: number
  name: string
  lastName: string
  email: string
  password: string
  role: role
  status: status
  avatar: string
}

export type UserCreationAttributes = Optional<UserAttributes, 'id' | 'name'| 'avatar'| 'role'| 'status'| 'lastName'>

declare global {
  namespace Express {
    export interface Request {
      user: Model<UserAttributes, UserCreationAttributes>
    }
  }
}
