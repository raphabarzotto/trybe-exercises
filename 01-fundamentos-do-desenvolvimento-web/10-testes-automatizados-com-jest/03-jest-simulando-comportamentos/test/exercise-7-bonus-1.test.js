const service = require('../src/exercise-7');

describe('fetchJokes', () => {
  it('should return a string with the joke', () => {
    const spy = jest.spyOn(service, 'fetchJoke')
      .mockResolvedValue('Whiteboards ... are remarkable.');
    service.fetchJoke();
    expect(spy).toBeCalledTimes(1);
    expect(service.fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
    expect(spy).toBeCalledTimes(2);
  })
})
