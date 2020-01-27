import { Application } from 'express'
import errorHandler, { createError } from 'middleware/errorHandlerMiddleware'

import { Routes } from '../server'
import { HttpStatusCode } from '../types'

const installRouter = async (app: Application, routes: Routes): Promise<void> => {
  // routing settings
  app.enable('case sensitive routing')
  app.enable('strict routing')

  // initialize router
  routes(app)

  // throw error if no matching route found
  app.use('*', (req, res, next) => {
    const err = createError(req, res, next)(`Route not found`, HttpStatusCode.NOT_FOUND)
    next(err)
  })

  // use error handler middleware
  app.use(errorHandler)
}

export default installRouter
