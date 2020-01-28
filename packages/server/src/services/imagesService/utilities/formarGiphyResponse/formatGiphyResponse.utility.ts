import { ImageData } from '@gifduck/types/imagesService'
import { GiphyImageResponse } from '../../services/giphyService/types'
import getAspectRatio from '../getAspectRatio'

type FormatGiphyResponse = (res: GiphyImageResponse) => ImageData[]

const GIPHY_ID_PREFIX = 'giphy_'

const formatImages = (data: GiphyImageResponse['data']): ImageData[] =>
  data.map(imgData => {
    const { original, downsized_still: preview } = imgData.images

    const originalHeight = Number(original.height)
    const originalWidth = Number(original.width)
    const previewHeight = Number(preview.height)
    const previewWidth = Number(preview.width)

    return {
      id: GIPHY_ID_PREFIX + imgData.id,
      image: {
        height: originalHeight,
        url: original.url,
        width: originalWidth,
        aspectRatio: getAspectRatio(originalWidth, originalHeight),
      },
      preview: {
        width: previewWidth,
        url: preview.url,
        height: previewHeight,
        aspectRatio: getAspectRatio(previewWidth, previewHeight),
      },
    }
  })

const formatGiphyResponse: FormatGiphyResponse = res => {
  const images = res.data
  return formatImages(images)
}

export default formatGiphyResponse
