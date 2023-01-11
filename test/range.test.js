import Range from '../src/range'

describe('Range', () => {
  describe('constructor', () => {
    const range = new Range(2, 8)

    expect(range.first).toBe(2)
    expect(range.last).toBe(8)
    expect(range.length).toBe(7)
  })

  describe('first', () => {
    expect(new Range(0, 1).first).toBe(0)
    expect(new Range(1, 0).first).toBe(1)
    expect(new Range(12, 2).first).toBe(12)
  })

  describe('last', () => {
    expect(new Range(0, 1).last).toBe(1)
    expect(new Range(1, 0).last).toBe(0)
    expect(new Range(12, 2).last).toBe(2)
  })

  describe('length', () => {
    expect(new Range(0, 1).length).toBe(2)
    expect(new Range(1, 0).length).toBe(2)
    expect(new Range(12, 2).length).toBe(11)
  })

  describe('toArray', () => {
    it('returns array with numbers in range', () => {
      expect(new Range(0, 0).toArray()).toEqual([0])
      expect(new Range(1, 1).toArray()).toEqual([1])
      expect(new Range(0, 1).toArray()).toEqual([0, 1])
      expect(new Range(1, 0).toArray()).toEqual([1, 0])
      expect(new Range(0, 2).toArray()).toEqual([0, 1, 2])
      expect(new Range(2, 0).toArray()).toEqual([2, 1, 0])
      expect(new Range(1, 6).toArray()).toEqual([1, 2, 3, 4, 5, 6])
      expect(new Range(6, 1).toArray()).toEqual([6, 5, 4, 3, 2, 1])
      expect(new Range(-2, 2).toArray()).toEqual([-2, -1, 0, 1, 2])
      expect(new Range(2, -2).toArray()).toEqual([2, 1, 0, -1, -2])
    })
  })
})
