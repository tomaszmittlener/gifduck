import { SearchQuery, SearchQueryKeys } from '@gifduck/types/imagesService'
import { getQuery } from 'common/queryString'

const getSearchQueryFromString = (searchString: string): SearchQuery => {
  const searchText = getQuery(searchString)[SearchQueryKeys.searchText]
  return {
    [SearchQueryKeys.searchText]: searchText ? String(searchText) : '',
  }
}

export default getSearchQueryFromString
