export default class Sequence {
  static #DEFAULT_SIZE = 16

  static sequence(first, last, size = Sequence.#DEFAULT_SIZE) {
    if (size <= 0) return []
    if (size === 1) return [first]
    if (size === 2) return [first, last]

    const ratio = (last / first) ** (1 / (size - 1))

    const sequence = [first]
    for (let i = 1; i < size - 1; i++) {
      sequence.push(sequence[i - 1] * ratio)
    }
    sequence.push(last)

    return sequence.map((value) => Math.round(value))
  }
}
