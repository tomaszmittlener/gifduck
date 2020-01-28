require('jest-styled-components')
require('@testing-library/jest-dom')
require('@testing-library/jest-dom/extend-expect')

// mock intersection observer
global.IntersectionObserver = class IntersectionObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  observe() {
    return null
  }

  unobserve() {
    return null
  }
}
