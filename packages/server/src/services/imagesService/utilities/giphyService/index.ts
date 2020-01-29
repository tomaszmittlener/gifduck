import Axios, { AxiosPromise } from 'axios'
import { stringify } from 'querystring'
import { SearchQuery, SearchQueryKeys } from '@gifduck/types/imagesService'
import { GiphyImageResponse, GiphySearchQuery } from './types'

interface GiphyService {
  search: (searchQuery: SearchQuery) => AxiosPromise<GiphyImageResponse>
}

const GIPHY_API_KEY = process.env.GIPHY_API_KEY || ''
const BASE_URL = 'https://api.giphy.com/v1'

const instance = Axios.create({
  baseURL: BASE_URL,
})

const getGiphyQuery = (apiKey: string, searchQuery: SearchQuery): GiphySearchQuery => {
  return {
    ['api_key']: apiKey,
    q: searchQuery[SearchQueryKeys.searchText],
    limit: 20,
  }
}

const giphyService: GiphyService = {
  search: searchQuery => {
    const query = getGiphyQuery(GIPHY_API_KEY, searchQuery)
    return instance.get(`/gifs/search?${stringify(query)}`)
  },
}

export default giphyService
