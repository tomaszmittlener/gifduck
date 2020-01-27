import { ImageData, SearchQuery } from '@gifduck/common-types/imagesService'
import giphyService from './services/giphyService'
import pixabayService from './services/pixabayService'
import formatGiphyResponse from './utilities/formarGiphyResponse'
import formatPixabayResponse from './utilities/formarPixabayResponse'

const imagesService = {
  search: async (searchQuery: SearchQuery): Promise<ImageData[]> => {
    try {
      const giphyData = await giphyService.search(searchQuery)
      const giphyImages = formatGiphyResponse(giphyData.data)

      const pixabayData = await pixabayService.search(searchQuery)
      const pixabayImages = await formatPixabayResponse(pixabayData.data)

      return [...giphyImages, ...pixabayImages]
    } catch (e) {
      throw e
    }
  },
}

export default imagesService
