import express from 'express'
// Routers
import usersRouter from './routes/userRouter'
// Controllers
import { globalErrorHandler } from './controllers/error.controller'

// Init our Express app
const app = express()

// Enable Express app to receive JSON data
app.use(express.json())

// Define endpoints
app.use('/api/v1/users', usersRouter)

// Global error handler
app.use(globalErrorHandler)

// Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exists in our server`
  })
})

export default app
