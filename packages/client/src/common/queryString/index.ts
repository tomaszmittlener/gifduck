import { stringify, parse } from 'qs'

export interface DefaultQuery {
  [key: string]: string | string[]
}

export const getQuery = (queryString: string): DefaultQuery => {
  return parse(queryString, {
    ignoreQueryPrefix: true,
  })
}

export const stringifyQuery = <T = DefaultQuery>(queryObject: T): string => {
  return stringify(queryObject, { addQueryPrefix: true })
}

export const mergeQueries = <T = DefaultQuery>(oldQueryObject: T, newQueryObject: T): T => {
  return {
    ...oldQueryObject,
    ...newQueryObject,
  }
}
