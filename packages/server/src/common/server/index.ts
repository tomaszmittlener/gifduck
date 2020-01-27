import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import http from 'http'

import logger from '../logger'
import loggerMiddleware from 'middleware/loggerMiddleware'
import installRouter from '../installRouter'

export type Routes = (app: Application) => void

const app = express()
const exit = process.exit

export default class Server {
  private routes: Routes = () => undefined

  constructor() {
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.text())
    app.use(loggerMiddleware)
  }

  router = (routes: Routes): Server => {
    this.routes = routes
    return this
  }

  welcome = (port: number): void => {
    logger.info(`>> Running on ${process.env.NODE_ENV} on port: ${port}`)
  }

  async listen(port: number): Promise<Application> {
    try {
      await installRouter(app, this.routes)
      http.createServer(app).listen(port, () => this.welcome(port))
    } catch (e) {
      logger.error(e)
      exit(1)
    }

    return app
  }
}
