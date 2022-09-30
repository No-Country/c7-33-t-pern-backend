import express from 'express'
import usersRouter from './routes/userRouter'
import { globalErrorHandler } from './controllers/error.controller'

// Init our Express app
const app = express()

app.use(express.json())
app.use('/api/v1/users', usersRouter)
app.use(globalErrorHandler)

// Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exists in our server`
  })
})

export default app
