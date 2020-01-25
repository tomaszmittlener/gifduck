import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'common/env'

const PORT = process.env.PORT

const getApp = () => {
  const app = express()
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.get('/api/v1/test', (_, res) => {
    res.json({ data: 'server responded' })
  })
  return app
}

const startServer = () => {
  try {
    const app = getApp()
    app.listen(PORT, () => {
      console.log(`server started at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}
startServer()
