import express from 'express'
import morgan from 'morgan'
import usersRouter from './routes/userRouter'
import { globalErrorHandler } from './controllers/error.controller'
import reviewRouter from './routes/reviewRouter'

// Init our Express app
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use(globalErrorHandler)

// Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exists in our server`
  })
})

export default app
