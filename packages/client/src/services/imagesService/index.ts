import mockImages from './mockImages'
import { SearchQuery, ImagesResponse } from '@gifduck/common-types/imagesService'

interface ImagesService {
  getImages: (searchQuery: SearchQuery) => Promise<ImagesResponse>
}

const imagesService: ImagesService = {
  getImages: async (query: SearchQuery) => {
    console.log(query)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockImages)
      }, 200)
    })
  },
}

export default imagesService
