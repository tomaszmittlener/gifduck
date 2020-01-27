import Axios, { AxiosPromise } from 'axios'
import { SearchQuery, ImagesSearchResponse } from '@gifduck/common-types/imagesService'
import { stringifyQuery } from 'utilities/query'

const BASE_URL = 'http://localhost:4000/api/v1/images'

const instance = Axios.create({
  baseURL: BASE_URL,
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
