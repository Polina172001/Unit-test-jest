const {
  sum,
  nativeNull
} = require('./intro')

describe('Sum function: ', () => {
  test('check sum', () => {
    expect(sum(2, 7)).toBe(9)
    expect(sum(2, 7)).toEqual(9)
  })

  test('check sum value', () => {
    expect(sum(2, 3)).toBeGreaterThan(4) //больше чем
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5) //больше или равно
    expect(sum(2, 3)).toBeLessThan(10) //меньше
    expect(sum(2, 3)).toBeLessThanOrEqual(5) //меньше или равно
  })

  test('check sum with float value', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3) //вещественные числа
  })
})

describe('Null function:', () => {
  test('check null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeDefined() //определен
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()
  })
})