import Axios, { AxiosPromise } from 'axios'
import { stringify } from 'querystring'
import { SearchQuery, SearchQueryKeys } from '@gifduck/types/imagesService'
import { PixabayImageResponse, PixabaySearchQuery } from './types'

interface PixabayService {
  search: (searchQuery: SearchQuery) => AxiosPromise<PixabayImageResponse>
}

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY || ''
const BASE_URL = 'https://pixabay.com/api'

const instance = Axios.create({
  baseURL: BASE_URL,
})

const getPixabayQuery = (apiKey: string, searchQuery: SearchQuery): PixabaySearchQuery => {
  return {
    key: apiKey,
    q: searchQuery[SearchQueryKeys.searchText],
    ['per_page']: 20,
  }
}

const pixabayService: PixabayService = {
  search: searchQuery => {
    const query = getPixabayQuery(PIXABAY_API_KEY, searchQuery)
    return instance.get(`/?${stringify(query)}`)
  },
}

export default pixabayService
