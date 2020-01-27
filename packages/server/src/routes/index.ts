import { Application } from 'express'
import imagesRouter from 'controllers/images/router'

const API_BASE_URL = '/api/v1'
const IMAGES_SERVICE_URL = '/images'

const Routes = (app: Application): void => {
  app.use(API_BASE_URL + IMAGES_SERVICE_URL, imagesRouter)
}

export default Routes
