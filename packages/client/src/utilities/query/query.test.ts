import { getQuery, stringifyQuery, mergeQueries, DefaultQuery } from './'

interface TestCase<V, E> {
  title: string
  value: V
  expected: E
}

describe('query utilities - getQuery', () => {
  const TEST_CASES: TestCase<string, DefaultQuery>[] = [
    {
      title: 'parses string correctly',
      value: '?a=a-value&b=b-value',
      expected: { a: 'a-value', b: 'b-value' },
    },
  ]

  TEST_CASES.forEach(({ title, value, expected }) => {
    test(title, () => {
      expect(getQuery(value)).toEqual(expected)
    })
  })
})

describe('query utilities - stringifyQuery', () => {
  const TEST_CASES: TestCase<DefaultQuery, string>[] = [
    {
      title: 'stringifies query correctly',
      value: { a: 'a-value', b: 'b-value' },
      expected: '?a=a-value&b=b-value',
    },
  ]

  TEST_CASES.forEach(({ title, value, expected }) => {
    test(title, () => {
      expect(stringifyQuery(value)).toEqual(expected)
    })
  })
})

describe('query utilities - mergeQueries', () => {
  const TEST_CASES: TestCase<[DefaultQuery, DefaultQuery], DefaultQuery>[] = [
    {
      title: 'adds new parameter',
      value: [{ a: 'a-value' }, { b: 'b-value' }],
      expected: { a: 'a-value', b: 'b-value' },
    },
    {
      title: 'overrides old parameter',
      value: [{ a: 'a-value', b: 'b-value' }, { b: 'b-value-new' }],
      expected: { a: 'a-value', b: 'b-value-new' },
    },
  ]

  TEST_CASES.forEach(({ title, value, expected }) => {
    test(title, () => {
      expect(mergeQueries(...value)).toEqual(expected)
    })
  })
})
