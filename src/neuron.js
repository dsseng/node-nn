import activations from './activations'
const tanh = activations.tanh

export default class Neuron {
  inputs = []
  weights = []
  inputsNumber = 0
  out = 0
  activation = tanh

  constructor (inputsNumber, weights = [], activation = tanh) {
    this.inputsNumber = inputsNumber
    this.inputs = new Array(this.inputsNumber)
    if (weights.length === this.inputsNumber)
      this.weights = weights
    else
      this.weights = new Array(this.inputsNumber)
    this.activation = activation
  }

  process (inputs) {
    if (inputs.length !== this.inputsNumber)
      return
    this.inputs = inputs
    let sum = 0
    this.inputs.forEach((x, i) => {
      sum += x * this.weights[i]
    })
    sum /= this.inputsNumber
    sum = this.activation(sum)
    return sum
  }
}
