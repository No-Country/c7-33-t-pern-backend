import app from './app'
// Utils
import { initModels } from './models/initModels'
import { db } from './utils/database.util'

const startServer = async (): Promise<void> => {
  try {
    await db.authenticate()
    // Establish the relations between models
    initModels()
    await db.sync({ force: true })
    // Set server to listen
    const PORT = 8000
    app.listen(PORT, () => {
      console.log('Express app running!', PORT)
    })
  } catch (error) {
    console.log(error)
  }
}
void startServer()
