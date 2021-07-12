const {
  TestWatcher
} = require('jest')
const {
  map
} = require('./mock')

describe('Map function: ', () => {
  let array
  let fn

  beforeEach(() => {
    array = [1, 2, 3, 5]
    fn = jest.fn(x => x ** 2)
    map(array, fn)
  })

  test('should callback call', () => {
    expect(fn).toBeCalled()
  })

  test('should callback call 4 time', () => {
    expect(fn).toBeCalledTimes(4)
    expect(fn.mock.calls.length).toBe(4)
  })

  test('should pow 2 each element', () => {
    expect(fn.mock.results[0].value).toBe(1)
    expect(fn.mock.results[1].value).toBe(4)
    expect(fn.mock.results[2].value).toBe(9)
    expect(fn.mock.results[3].value).toBe(25)
  })
})