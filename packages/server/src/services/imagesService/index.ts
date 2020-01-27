import { ImageData } from '@gifduck/common-types/imagesService'

const images = [
  {
    id: '1',
    image: {
      height: '500',
      url:
        'https://media2.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif?cid=e4e1ee367ecd732a2a49e8edbd6c36992b2bed00708ee5bd&rid=giphy.gif',
      width: '500',
    },
    preview: {
      width: '500',
      url:
        'https://media2.giphy.com/media/Cmr1OMJ2FN0B2/giphy_s.gif?cid=e4e1ee367ecd732a2a49e8edbd6c36992b2bed00708ee5bd&rid=giphy_s.gif',
      height: '500',
    },
  },
]

const imagesService = {
  search: async (): Promise<ImageData[]> => {
    return new Promise(res => res(images))
  },
}

export default imagesService
