import { DependencyList, useEffect, useState } from 'react'
import { ImageData, SearchQuery } from '@gifduck/types/imagesService'
import { FetchStatus } from 'common/types'
import imagesService from 'services/imagesService'

interface UseFetchResultsProps {
  searchQuery: SearchQuery
  deps: DependencyList
  onFetchSuccess?: () => void
  onFetchError?: () => void
}

interface UseFetchResultsData {
  fetchStatus: FetchStatus
  data: ImageData[]
}

type UseFetchResults = (props: UseFetchResultsProps) => UseFetchResultsData

const useFetchResults: UseFetchResults = ({ searchQuery, deps, onFetchSuccess, onFetchError }) => {
  const [data, storeData] = useState<ImageData[]>([])
  const [fetchStatus, updateFetchStatus] = useState<FetchStatus>(FetchStatus.Loading)

  const getData = async () => {
    try {
      updateFetchStatus(FetchStatus.Loading)

      const { data } = await imagesService.getImages(searchQuery)
      storeData(data.results)
      updateFetchStatus(FetchStatus.Loaded)
      onFetchSuccess && onFetchSuccess()
    } catch (e) {
      updateFetchStatus(FetchStatus.Error)
      onFetchError && onFetchError()

      throw new Error(e)
    }
  }

  useEffect(() => {
    getData()
  }, deps)

  return { fetchStatus, data }
}

export default useFetchResults
