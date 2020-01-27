/**
 *
 * Pixabay search Api
 *
 */

/** Pixabay Search Endpoint query params
 * TODO: Add rest of available options
 */
export type PixabaySearchQuery = {
  /** A URL encoded search term. If omitted, all images are returned. This value may not exceed 100 characters. Example: "yellow+flower" */
  q?: string
  /** Pixabay API Key. */
  key: string
  /** Determine the number of results per page. Accepted values: 3 - 200 Default: 20 */
  per_page?: number
  /** Returned search results are paginated. Use this parameter to select the page number. Default: 1*/
  page?: number
  /** Filters results by specified rating. If you do not specify a rating, you will receive results from all possible ratings. */
}

/**
 * One current object after api response in hits
 */
export interface PixabayImageObject {
  /** A unique identifier for updating expired image URLs */
  id: number
  /**
   * Source page on Pixabay, which provides a download link for the original image of the
   * dimension imageWidth x imageHeight and the file size imageSize
   */
  pageURL: string
  /** Type of image */
  type: string
  /** Comma separated list of photo tags*/
  tags: string
  /**Low resolution images with a maximum width or height of 150 px (previewWidth x previewHeight) */
  previewURL: string
  /** Preview image width*/
  previewWidth: number
  /** Preview image height */
  previewHeight: number
  /**
   * Medium sized image with a maximum width or height of 640 px (webformatWidth x webformatHeight).
   * URL valid for 24 hours.
   */
  webformatURL: string
  /** Web format width */
  webformatWidth: number
  /** Web format height */
  webformatHeight: number
  /** Image width */
  imageWidth: number
  /** Image height */
  imageHeight: number
  /**  Image size (width * height) */
  imageSize: number
  /** Total number of views */
  views: number
  /**Total number of downloads */
  downloads: number
  /** Total number of favorites*/
  favorites: number
  /** Total number of likes*/
  likes: number
  /**Total number of comments*/
  comments: number
  /** User ID of the contributor. Profile URL: https://pixabay.com/users/{ USERNAME }-{ ID }*/
  user_id: number
  /** User name of the contributor. Profile URL: https://pixabay.com/users/{ USERNAME }-{ ID } */
  user: string
  /**  Profile picture URL (250 x 250 px) */
  userImageURL: string
}

/** Response for pixabay image search request */
export interface PixabayImageResponse {
  /**
   * The total number of hits.
   */
  total: number
  /**
   * The number of videos accessible through the API. By default, the API is limited to return a
   * maximum of 500 videos per query.
   */
  totalHits: number
  /**
   * The current images
   */
  hits: PixabayImageObject[]
}

/**
 *
 * Giphy search Api
 *
 */

/**
 * Giphy Search Endpoint query params.
 * TODO: Add rest of available options
 * */
export type GiphySearchQuery = {
  /** Search query term or phrase. */
  q?: string
  /** GIPHY API Key. */
  api_key: string
  /** The maximum number of objects to return. (Default: “25”) */
  limit?: number
  /** Specifies the starting position of the results. Defaults to 0. */
  offset?: number
}

/** Giphy object with meta data */
export interface GiphyMetaObject {
  msg: string
  status: number
  response_id: string
}

/** Giphy object with pagination data */
export interface GiphyPaginationObject {
  offset: number
  total_count: number
  count: number
}

/** Giphy object with available images data (incl. height, width, format etc.) */
export interface GiphyImagesObject {
  fixed_height: {
    url: string
    width: string
    height: string
    size: string
    mp4: string
    mp4_size: string
    webp: string
    webp_size: string
  }
  fixed_height_still: {
    url: string
    width: string
    height: string
  }
  fixed_height_downsampled: {
    url: string
    width: string
    height: string
    size: string
    webp: string
    webp_size: string
  }
  fixed_width: {
    url: string
    width: string
    height: string
    size: string
    mp4: string
    mp4_size: string
    webp: string
    webp_size: string
  }
  fixed_width_still: {
    url: string
    width: string
    height: string
  }
  fixed_width_downsampled: {
    url: string
    width: string
    height: string
    size: string
    webp: string
    webp_size: string
  }
  fixed_height_small: {
    url: string
    width: string
    height: string
    size: string
    webp: string
    webp_size: string
  }
  fixed_height_small_still: {
    url: string
    width: string
    height: string
  }
  fixed_width_small: {
    url: string
    width: string
    height: string
    size: string
    webp: string
    webp_size: string
  }
  fixed_width_small_still: {
    url: string
    width: string
    height: string
  }
  downsized: {
    url: string
    width: string
    height: string
    size: string
  }
  downsized_still: {
    url: string
    width: string
    height: string
  }
  downsized_large: {
    url: string
    width: string
    height: string
    size: string
  }
  original: {
    url: string
    width: string
    height: string
    size: string
    frames: string
    mp4: string
    mp4_size: string
    webp: string
    webp_size: string
  }
  original_still: {
    url: string
    width: string
    height: string
  }
}

/** Giphy base image object */
export interface GiphyGIFObject {
  type: string
  id: string
  slug: string
  url: string
  bitly_gif_url: string
  bitly_url: string
  embed_url: string
  username: string
  source: string
  rating: string
  caption: string
  content_url: string
  source_tld: string
  source_post_url: string
  import_datetime: string
  trending_datetime: string
  images: GiphyImagesObject
  meta: GiphyMetaObject
}

/** Response for giphy image search request */
export interface GiphyImageResponse {
  data: GiphyGIFObject[]
  pagination: GiphyPaginationObject
  meta: GiphyMetaObject
}
