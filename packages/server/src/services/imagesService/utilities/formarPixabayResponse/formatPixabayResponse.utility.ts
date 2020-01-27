import { ImageData } from '@gifduck/common-types/imagesService'
import { PixabayImageResponse } from '../../services/pixabayService/types'

type FormatGiphyResponse = (res: PixabayImageResponse) => ImageData[]

const PIXABAY_ID_PREFIX = 'pixabay_'

const formatImages = (data: PixabayImageResponse['hits']): ImageData[] =>
  data.map(imgData => {
    const { webformatURL, webformatHeight, webformatWidth, previewURL, previewHeight, previewWidth, id } = imgData
    return {
      id: PIXABAY_ID_PREFIX + String(id),
      image: {
        height: String(webformatHeight),
        url: webformatURL,
        width: String(webformatWidth),
      },
      preview: {
        width: String(previewWidth),
        url: previewURL,
        height: String(previewHeight),
      },
    }
  })

const formatPixabayResponse: FormatGiphyResponse = res => {
  const images = res.hits
  return formatImages(images)
}

export default formatPixabayResponse
