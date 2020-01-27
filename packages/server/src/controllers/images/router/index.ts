import { Router } from 'express'
import imagesController from '../controller'

export default Router()
  .get('/', imagesController.search)
  .get('/error', imagesController.error)
