import getSearchQueryFromString from './'
import { SearchQuery, SearchQueryKeys } from '@gifduck/types/imagesService'

interface TestCase {
  title: string
  value: string
  expected: SearchQuery
}

const TEST_CASES: TestCase[] = [
  {
    title: 'parses string correctly',
    value: '?q=test-text',
    expected: { [SearchQueryKeys.searchText]: 'test-text' },
  },
]

describe('common - getSearchQueryFromString', () => {
  TEST_CASES.forEach(({ title, value, expected }) => {
    test(title, () => {
      expect(getSearchQueryFromString(value)).toEqual(expected)
    })
  })
})
