import { ImageData } from '@gifduck/types/imagesService'
import { PixabayImageResponse } from '../pixabayService/types'
import getAspectRatio from '../getAspectRatio'

type FormatGiphyResponse = (res: PixabayImageResponse) => ImageData[]

const PIXABAY_ID_PREFIX = 'pixabay_'

const formatImages = (data: PixabayImageResponse['hits']): ImageData[] =>
  data.map(imgData => {
    const { webformatURL, webformatHeight, webformatWidth, previewURL, previewHeight, previewWidth, id } = imgData
    return {
      id: PIXABAY_ID_PREFIX + String(id),
      image: {
        height: webformatHeight,
        url: webformatURL,
        width: webformatWidth,
        aspectRatio: getAspectRatio(webformatWidth, webformatHeight),
      },
      preview: {
        width: previewWidth,
        url: previewURL,
        height: previewHeight,
        aspectRatio: getAspectRatio(previewWidth, previewHeight),
      },
    }
  })

const formatPixabayResponse: FormatGiphyResponse = res => {
  const images = res.hits
  return formatImages(images)
}

export default formatPixabayResponse
