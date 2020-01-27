import { Request, Response, NextFunction } from 'express'
import { HttpStatusCode } from 'common/types'

const DEFAULT_MESSAGE = 'Something went wrong'

const getHTMLErrorTemplate = (message: string, status: HttpStatusCode) => `
  <h1 style="color: red ">${status} Error</h1>
  <pre>${message}</pre>
`

const createError = (req: Request, res: Response, next: NextFunction) => (
  message: string,
  statusCode: HttpStatusCode,
) => {
  res.status(statusCode)
  next(new Error(message))
}

/**
 * Error handler to display the error as HTML
 */
const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const status = res.statusCode || HttpStatusCode.SERVICE_UNAVAILABLE
  const message = err.message || DEFAULT_MESSAGE

  res.send(getHTMLErrorTemplate(message, status))
}

export { createError }
export default errorHandler
