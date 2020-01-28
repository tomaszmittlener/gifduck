import { NextFunction, Request, Response } from 'express'
import { ImagesSearchResponse, SearchQuery, SearchQueryKeys, ImageData } from '@gifduck/types/imagesService'
import imagesService from 'services/imagesService'
import { createError } from 'middleware/errorHandlerMiddleware'
import logger from 'common/logger'
import { HttpStatusCode } from 'common/types'

const getSearchResponseBody = (imagesData: ImageData[]): ImagesSearchResponse => ({
  results: imagesData,
})

const imagesController = {
  search: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query: SearchQuery = req.query
      if (!!query[SearchQueryKeys.searchText]) {
        const imagesData = await imagesService.search(query)
        const responseBody = getSearchResponseBody(imagesData)
        res.json(responseBody)
      } else {
        const responseBody = getSearchResponseBody([])
        res.json(responseBody)
      }
    } catch (e) {
      logger.error(e, 'Giphy Controller - Search') // will also console any service errors
      const err = createError(req, res, next)('Something went wrong', HttpStatusCode.INTERNAL_SERVER_ERROR)
      next(err)
    }
  },
}

export default imagesController
