const Loadash = require('./sync')

let _ = new Loadash() // instance - экземпляр

describe('Loadash: compact', () => {


  let array = [false, 42, 0, 'hello', '', null]

  beforeEach(() => {
    const array = [false, 42, 0, 'hello', '', null]
  })

  afterAll(() => {
    _ = new Loadash()
  })

  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined() //должен быть определен метод compact
  })

  test('should be remove falsy value', () => { //удаляем ложные значения

    const result = [42, 'hello']
    expect(_.compact(array)).toEqual(result)
  })

  test('not should be falsy value', () => { //не должен содержать значения ..
    expect(_.compact(array)).not.toContain(false)
    expect(_.compact(array)).not.toContain(0)
    expect(_.compact(array)).not.toContain('')
    expect(_.compact(array)).not.toContain(null)
  })
})

describe('Loadash: groupBy', () => {

  test('should be defined', () => {
    expect(_.groupBy).toBeDefined()
    expect(_.groupBy).not.toBeUndefined() //должен быть определен метод compact
  })

  test('should be group array with Math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1]
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }
    expect(_.groupBy(array, Math.floor)).toEqual(result)
  })

  test('should be group array with length', () => {
    const array = ['one', 'two', 'three']
    const result = {
      5: ['three'],
      3: ['one',
        'two'
      ]
    }
    expect(_.groupBy(array, 'length')).toEqual(result)
  })

  test('should NOt return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array) //не должен быть экземляром класса array
  })

})