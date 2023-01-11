export default class Range {
  #first
  #last
  #length

  static range(first, last) {
    return new Range(first, last)
  }

  constructor(first, last) {
    this.#first = first
    this.#last = last
    this.#length = Math.abs(this.last - this.first) + 1
  }

  get first() {
    return this.#first
  }

  get last() {
    return this.#last
  }

  get length() {
    return this.#length
  }

  toArray() {
    const inc = this.first < this.last ? 1 : -1

    return Array.from({ length: this.length }, (_, i) => this.first + (i * inc))
  }
}
