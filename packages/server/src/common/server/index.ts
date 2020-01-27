import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import http from 'http'

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
  }

  router = (routes: Routes): Server => {
    this.routes = routes
    return this
  }

  welcome = (port: number): void => {
    console.info(`>> Running on ${process.env.NODE_ENV} on port: ${port}`)
  }

  installRouter = (): void => {
    this.routes(app)
  }

  async listen(port: number): Promise<Application> {
    try {
      this.installRouter()
      http.createServer(app).listen(port, () => this.welcome(port))
    } catch (e) {
      console.error(e)
      exit(1)
    }

    return app
  }
}
