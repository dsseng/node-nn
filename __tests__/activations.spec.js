import activations from '../src/activations'

describe('activations', () => {
  it('tanh(0.5) should be equal 0.46211715726000974', () => {
    expect(activations.tanh(0.5)).toEqual(0.46211715726000974)
  })
  it('tanh(0.3) should be equal 0.2913126124515909', () => {
    expect(activations.tanh(0.3)).toEqual(0.2913126124515909)
  })
  it('linear(0.3) should be equal 0.3', () => {
    expect(activations.linear(0.3)).toEqual(0.3)
  })
})
