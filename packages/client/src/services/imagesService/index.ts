import Axios, { AxiosPromise } from 'axios'
import { SearchQuery, ImagesSearchResponse } from '@gifduck/common-types/imagesService'
import { stringifyQuery } from 'utilities/query'

const BASE_URL = process.env.IMAGES_SEARCH_BAES_URL

const instance = Axios.create({
  baseURL: BASE_URL + '/api/v1/images',
})

interface ImagesService {
  getImages: (searchQuery: SearchQuery) => AxiosPromise<ImagesSearchResponse>
}

const imagesService: ImagesService = {
  getImages: async (query: SearchQuery) => {
    return instance.get(stringifyQuery(query))
  },
}

export default imagesService
