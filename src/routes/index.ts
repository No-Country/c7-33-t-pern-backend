import express from 'express'
import branchRouter from './branchRouter'
import reviewRouter from './reviewRouter'
import technologyRouter from './technologyRouter'
import usersRouter from './userRouter'

const routers = express.Router()

// rutas de acceso
routers
  .use('/branchs', branchRouter)
  .use('/reviews', reviewRouter)
  .use('/technologies', technologyRouter)
  .use('/users', usersRouter)

export default routers
