import Sequence from '../src/sequence'

describe('Sequence', () => {
  describe('sequence', () => {
    it('returns an array with sequence default size', () => {
      expect(Sequence.sequence(100, 8192)).toEqual([100, 134, 180, 241, 324, 434, 583, 781, 1048, 1406, 1886, 2530, 3394, 4553, 6107, 8192])
      expect(Sequence.sequence(8192, 100)).toEqual([8192, 6107, 4553, 3394, 2530, 1886, 1406, 1048, 781, 583, 434, 324, 241, 180, 134, 100])
    })

    it('returns an empty array when the size of the sequence is a negative number', () => {
      expect(Sequence.sequence(100, 8192, -1)).toEqual([])
      expect(Sequence.sequence(8192, 100, -1)).toEqual([])
    })

    it('returns an empty array when the size of the sequence is zero', () => {
      expect(Sequence.sequence(100, 8192, 0)).toEqual([])
      expect(Sequence.sequence(8192, 100, 0)).toEqual([])
    })

    it('returns an array with expected ascending order sequence', () => {
      expect(Sequence.sequence(100, 8192, 1)).toEqual([100])
      expect(Sequence.sequence(100, 8192, 2)).toEqual([100, 8192])
      expect(Sequence.sequence(100, 8192, 3)).toEqual([100, 905, 8192])
      expect(Sequence.sequence(100, 8192, 4)).toEqual([100, 434, 1886, 8192])
      expect(Sequence.sequence(100, 8192, 16)).toEqual([100, 134, 180, 241, 324, 434, 583, 781, 1048, 1406, 1886, 2530, 3394, 4553, 6107, 8192])
      expect(Sequence.sequence(100, 8192, 32)).toEqual([100, 115, 133, 153, 177, 204, 235, 270, 312, 359, 414, 477, 550, 634, 731, 843, 972, 1120, 1291, 1488, 1716, 1978, 2280, 2628, 3029, 3492, 4025, 4640, 5348, 6165, 7107, 8192])
    })

    it('returns an array with expected descending order sequence', () => {
      expect(Sequence.sequence(8192, 100, 1)).toEqual([8192])
      expect(Sequence.sequence(8192, 100, 2)).toEqual([8192, 100])
      expect(Sequence.sequence(8192, 100, 3)).toEqual([8192, 905, 100])
      expect(Sequence.sequence(8192, 100, 4)).toEqual([8192, 1886, 434, 100])
      expect(Sequence.sequence(8192, 100, 16)).toEqual([8192, 6107, 4553, 3394, 2530, 1886, 1406, 1048, 781, 583, 434, 324, 241, 180, 134, 100])
      expect(Sequence.sequence(8192, 100, 32)).toEqual([8192, 7107, 6165, 5348, 4640, 4025, 3492, 3029, 2628, 2280, 1978, 1716, 1488, 1291, 1120, 972, 843, 731, 634, 550, 477, 414, 359, 312, 270, 235, 204, 177, 153, 133, 115, 100])
    })
  })
})
