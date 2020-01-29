import { NextFunction, Request, Response } from 'express'
import { SearchQuery, ImagesSearchResponse, SearchQueryKeys } from '@gifduck/types/imagesService'
import imagesService from 'services/imagesService'
import { createError } from 'middleware/errorHandlerMiddleware'
import logger from 'common/logger'
import { HttpStatusCode } from 'common/types'

const imagesController = {
  search: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const searchQuery: SearchQuery = req.query
      const searchText = searchQuery[SearchQueryKeys.searchText]

      if (!searchText) {
        const response: ImagesSearchResponse = { results: [] }
        res.json(response)
      }

      const data = await imagesService.search(searchQuery)
      const response: ImagesSearchResponse = { results: data }
      res.json(response)
    } catch (e) {
      logger.error(e, 'Giphy Controller - Search') // will also console any service errors
      const err = createError(req, res, next)('Something went wrong', HttpStatusCode.INTERNAL_SERVER_ERROR)
      next(err)
    }
  },
}

export default imagesController
