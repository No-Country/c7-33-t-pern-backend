import express from 'express'
import { getAllTechnologies, createTechnology, getTechnologyById, updateTechnologyById } from '../controllers/technology.controller'
import { createUpdateValidators } from '../middlewares/technologyValidators.middlewares'
import { branchExists } from '../middlewares/exists.middlewares'

const branchRouter = express.Router()

// rutas de acceso
branchRouter
  .get('/', getAllTechnologies)
  .get('/:branchId', branchExists, getTechnologyById)
  .post('/', createUpdateValidators, createTechnology)
  .patch('/:branchId', createUpdateValidators, branchExists, updateTechnologyById)

export default branchRouter
