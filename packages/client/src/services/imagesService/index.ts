import mockImages from './mockImages'

export interface ImageObject {
  height: string
  width: string
  url: string
}

export interface ImageData {
  preview: ImageObject
  image: ImageObject
  id: string
}

export interface ImagesResponse {
  data: ImageData[]
}

export interface SearchQuery {
  searchText: string
}

interface ImagesService {
  getImages: (searchQuery: SearchQuery) => Promise<ImagesResponse>
}

const imagesService: ImagesService = {
  getImages: async () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(mockImages)
      }, 200)
    }),
}

export default imagesService
