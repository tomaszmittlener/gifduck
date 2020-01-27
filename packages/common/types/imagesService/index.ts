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

export enum SearchQueryKeys {
  searchText = 'q',
}

export interface SearchQuery {
  [SearchQueryKeys.searchText]: string
}
