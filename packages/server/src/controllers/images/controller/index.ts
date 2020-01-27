import { NextFunction, Request, Response } from 'express'
import imagesService from 'services/imagesService'

const imagesController = {
  search: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const data = await imagesService.search()
    res.json({ data: data })
  },
}

export default imagesController
