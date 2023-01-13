export default class Sequence {
  static DEFAULT_SIZE = 16

  static sequence (first, last, size = Sequence.DEFAULT_SIZE) {
    if (size <= 0) return []
    if (size === 1) return [first]
    if (size === 2) return [first, last]

    const ratio = (last / first) ** (1 / (size - 1))

    const seq = [first]
    for (let i = 1; i < size - 1; i++) {
      seq.push(seq[i - 1] * ratio)
    }
    seq.push(last)

    return seq.map((value) => Math.round(value))
  }
}
