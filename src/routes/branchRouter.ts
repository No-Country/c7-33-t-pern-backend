import express from 'express'
import { getAllBranchs, createBranch, getBranchById, updateBranchById } from '../controllers/branch.controller'
import { createUpdateValidators } from '../middlewares/branchValidators.middlewares'
import { branchExists } from '../middlewares/exists.middlewares'

const branchRouter = express.Router()

// rutas de acceso
branchRouter
  .get('/', getAllBranchs)
  .get('/:branchId', branchExists, getBranchById)
  .post('/', createUpdateValidators, createBranch)
  .patch('/:branchId', createUpdateValidators, branchExists, updateBranchById)

export default branchRouter
