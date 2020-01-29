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
