import { NextFunction, Request, Response } from 'express'
import { SearchQuery, SearchQueryKeys } from '@gifduck/common-types/imagesService'
import imagesService from 'services/imagesService'
import { createError } from 'middleware/errorHandlerMiddleware'
import logger from 'common/logger'
import { HttpStatusCode } from 'common/types'

const imagesController = {
  search: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query: SearchQuery = req.query
      if (!!query[SearchQueryKeys.searchText]) {
        const imagesData = await imagesService.search(query)
        res.json({ data: imagesData })
      } else {
        res.status(HttpStatusCode.NO_CONTENT).json({ data: [] })
      }
    } catch (e) {
      logger.error(e, 'Giphy Controller - Search')
      const err = createError(req, res, next)('Something went wrong', HttpStatusCode.INTERNAL_SERVER_ERROR)
      next(err)
    }
  },
  error: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return createError(req, res, next)('test error!', HttpStatusCode.BAD_REQUEST)
  },
}

export default imagesController
