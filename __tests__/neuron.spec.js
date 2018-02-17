import Neuron from '../src/neuron'
import activations from '../src/activations'
const linear = activations.linear

describe('neuron', () => {
  it('neuron test 1', () => {
    let n = new Neuron(2, [1, 1], linear)
    expect(n.process([1, 1])).toEqual(1)
  })
  it('neuron test 2', () => {
    let n = new Neuron(2, [1, 0.5], linear)
    expect(n.process([1, 1])).toEqual(0.75)
  })
  it('neuron test 3', () => {
    let n = new Neuron(2, [0.5, 0.5], linear)
    expect(n.process([1, 0.5])).toEqual(0.375)
  })
})
