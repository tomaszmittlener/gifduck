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

export type ImagesResponse = {
  data: ImageData[]
}

export type SearchQuery = {
  searchText: string
}

type GetImages = (searchQuery: SearchQuery) => Promise<ImagesResponse>

type ImagesService = {
  getImages: GetImages
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
