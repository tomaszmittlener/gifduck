import { NextFunction, Request, Response } from 'express'
import imagesService from 'services/imagesService'
import { createError } from 'middleware/errorHandlerMiddleware'
import { HttpStatusCode } from '../../../common/types'

const imagesController = {
  search: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const data = await imagesService.search()
    res.json({ data: data })
  },
  error: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return createError(req, res, next)('test error!', HttpStatusCode.BAD_REQUEST)
  },
}

export default imagesController
