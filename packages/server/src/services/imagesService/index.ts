import { ImageData, SearchQuery } from '@gifduck/types/imagesService'
import giphyService from './utilities/giphyService'
import pixabayService from './utilities/pixabayService'
import formatGiphyResponse from './utilities/formatGiphyResponse'
import formatPixabayResponse from './utilities/formatPixabayResponse'

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
