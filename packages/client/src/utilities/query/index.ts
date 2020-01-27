import { stringify, parse } from 'qs'

export interface DefaultQuery {
  [key: string]: string | string[]
}

export const getQuery = (queryString: string): DefaultQuery => {
  return parse(queryString, {
    ignoreQueryPrefix: true,
  })
}

export const stringifyQuery = (queryString: DefaultQuery): string => {
  return stringify(queryString, { addQueryPrefix: true })
}

export const mergeQueries = (oldQuery: DefaultQuery, newQuery: DefaultQuery): DefaultQuery => {
  return {
    ...oldQuery,
    ...newQuery,
  }
}
