import { ImageData } from '@gifduck/common-types/imagesService'
import { GiphyImageResponse } from '../../services/giphyService/types'

type FormatGiphyResponse = (res: GiphyImageResponse) => ImageData[]

const GIPHY_ID_PREFIX = 'giphy_'

const formatImages = (data: GiphyImageResponse['data']): ImageData[] =>
  data.map(imgData => {
    const { original, downsized_still: downsizedStill } = imgData.images
    return {
      id: GIPHY_ID_PREFIX + imgData.id,
      image: { height: original.height, url: original.url, width: original.width },
      preview: {
        width: downsizedStill.width,
        url: downsizedStill.url,
        height: downsizedStill.height,
      },
    }
  })

const formatGiphyResponse: FormatGiphyResponse = res => {
  const images = res.data
  return formatImages(images)
}

export default formatGiphyResponse
