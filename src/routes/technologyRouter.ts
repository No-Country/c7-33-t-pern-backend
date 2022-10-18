import express from 'express'

import { getAllTechnologies, createTechnology, getTechnologyById, updateTechnologyById, deleteTechnologyById } from '../controllers/technology.controller'
import { createUpdateValidators } from '../middlewares/technologyValidators.middlewares'
import { technologyExists } from '../middlewares/exists.middlewares'

const technologyRouter = express.Router()

// rutas de acceso
technologyRouter
  .delete('/:technologyId', technologyExists, deleteTechnologyById)
  .get('/', getAllTechnologies)
  .post('/', createUpdateValidators, createTechnology)
  .get('/:technologyId', technologyExists, getTechnologyById)
  .patch('/:technologyId', technologyExists, createUpdateValidators, updateTechnologyById)

export default technologyRouter
