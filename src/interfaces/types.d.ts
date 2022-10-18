import { Branch, Review, Technology, User } from '../models'

// database interface
export interface DataBaseType {
  host: string
  name: string
  password: string
  port: number
  user: string
}

//
interface Header {
  authorization: String
}
// global express interface
declare global {
  namespace Express {
    export interface Request {
      user: User
      branch: Branch
      technology: Technology
      review: Review
      sessionUser: User
      headers: Header
    }
  }
}

//
declare module 'jsonwebtoken' {
  export interface JwtPayload {
    id: number
  }
}
