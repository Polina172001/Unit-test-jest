const axios = require('axios')
const Ajax = require('./async')
jest.mock('axios')

describe('Ajax: echo', () => {
  test('should return async value', async () => {
    const result = await Ajax.echo('some data')
    expect(result).toBe('some data')
  })

  test('should return value with promise', () => {
    return Ajax.echo('some data').then(data => {
      expect(data).toBe('some data')
    })
  })

  test('should return error with promise', () => {
    return Ajax.echo().catch(err => {
      expect(err).toBeInstanceOf(Error)
    })
  })

  test('should try catch async value', async () => {
    try {
      await Ajax.echo()
    } catch (e) {
      expect(e.message).toBe('error')
    }
  })
})

describe('Ajax: GET', () => {
  let response
  let todos

  beforeEach(() => {
    todos = [{
      id: 1,
      title: 'todos 1',
      completed: false
    }]
    response = {
      data: {
        todos
      }
    }
  })

  test('check get request', () => {
    axios.get.mockReturnValue(response)

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })
})