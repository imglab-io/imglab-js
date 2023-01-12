import Srcset from '../src/srcset'
import Source from '../src/source'
import Range from '../src/range'
import Sequence from '../src/sequence'

const range = Range.range
const sequence = Sequence.sequence

const SECURE_KEY = 'ixUd9is/LDGBw6NPfLCGLjO/WraJlHdytC1+xiIFj22mXAWs/6R6ws4gxSXbDcUHMHv0G+oiTgyfMVsRS2b3'
const SECURE_SALT = 'c9G9eYKCeWen7vkEyV1cnr4MZkfLI/yo6j72JItzKHjMGDNZKqPFzRtup//qiT51HKGJrAha6Gv2huSFLwJr'

const SOURCE = new Source('assets')
const SECURE_SOURCE = new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT })

describe('Srcset', () => {
  describe('srcset using source name', () => {
    it('returns srcset without params', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg')

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192 8192w'
      )
    })

    it('returns srcset without size params', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { aspectRatio: '16:9', format: 'png' })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=8192 8192w'
      )
    })

    it('returns srcset with null width', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192 8192w'
      )
    })

    it('returns srcset with undefined width', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192 8192w'
      )
    })

    it('returns srcset with null height', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=8192 8192w'
      )
    })

    it('returns srcset with undefined height', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=8192 8192w'
      )
    })

    it('returns srcset without widht, without height and with fixed quality', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with null quality', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { quality: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with undefined quality', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { quality: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=72&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=69&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=66&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=63&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=61&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=58&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=56&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=54&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=51&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=49&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=47&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=45&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=43&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=42&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=40&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with empty array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with array of qualities of size 1', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=70&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=65&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192 8192w'
      )
    })

    it('returns srcset with fixed width', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and fixed dpr', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, dpr: 2 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and null dpr', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, dpr: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and undefined dpr', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, dpr: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and range of dprs', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, dpr: range(1, 4) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x'
      )
    })

    it('returns srcset with fixed width and empty array of dprs', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, dpr: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and array of dprs of size 1', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, dpr: [1] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x')
    })

    it('returns srcset with fixed width and array of dprs', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, dpr: [1, 2, 3] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x'
      )
    })

    it('returns srcset with fixed width and fixed quality', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and null quality', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, quality: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and undefined quality', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, quality: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=66&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=58&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=51&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=45&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=40&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and empty array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and array of qualities of size 1', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=70&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=65&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, range of dprs and range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, dpr: range(1, 4), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&quality=61 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&quality=49 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4&quality=40 4x'
      )
    })

    it('returns srcset with fixed width, array of dprs and array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, dpr: [1, 2, 3], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&quality=70 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&quality=65 3x'
      )
    })

    it('returns srcset with fixed height', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and fixed dpr', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, dpr: 2 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and null dpr', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, dpr: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and undefined dpr', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, dpr: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and range of dprs', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, dpr: range(1, 4) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x'
      )
    })

    it('returns srcset with fixed height and empty array of dprs', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, dpr: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and array of dprs of size 1', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, dpr: [1] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x')
    })

    it('returns srcset with fixed height and array of dprs', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, dpr: [1, 2, 3] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x'
      )
    })

    it('returns srcset with fixed height and fixed quality', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and null quality', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, quality: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and undefined quality', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, quality: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=66&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=58&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=51&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=45&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=40&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and empty array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and array of qualities of size 1', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=70&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=65&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height, range of dprs and range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, dpr: range(1, 4), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&quality=61 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&quality=49 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4&quality=40 4x'
      )
    })

    it('returns srcset with fixed height, array of dprs and array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { height: 200, dpr: [1, 2, 3], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&quality=70 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&quality=65 3x'
      )
    })

    it('returns srcset with fixed width and fixed height', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and fixed dpr', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, dpr: 2 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and range of dprs', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, dpr: range(1, 4) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4 4x'
      )
    })

    it('returns srcset with fixed width, fixed height and empty array of dprs', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, dpr: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and array of dprs of size 1', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, dpr: [1] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x')
    })

    it('returns srcset with fixed width, fixed height and array of dprs', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, dpr: [1, 2, 3] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3 3x'
      )
    })

    it('returns srcset with fixed width, fixed height and fixed quality', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=66&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=58&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=51&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=45&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=40&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and empty array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and array of qualities of size 1', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=70&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=65&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height, range of dprs and range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, dpr: range(1, 4), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&quality=61 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&quality=49 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4&quality=40 4x'
      )
    })

    it('returns srcset with fixed width, fixed height, array of dprs and array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: 200, height: 300, dpr: [1, 2, 3], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&quality=70 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&quality=65 3x'
      )
    })

    it('returns srcset with range of widths', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: range(100, 4096) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=128 128w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=164 164w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=269 269w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=345 345w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=566 566w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=724 724w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1188 1188w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1522 1522w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2497 2497w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3198 3198w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096 4096w'
      )
    })

    it('returns srcset with range of widths and range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: range(100, 4096), quality: range(70, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&quality=70 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=128&quality=67 128w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=164&quality=65 164w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210&quality=63 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=269&quality=60 269w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=345&quality=58 345w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442&quality=56 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=566&quality=54 566w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=724&quality=52 724w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928&quality=50 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1188&quality=48 1188w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1522&quality=46 1522w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949&quality=45 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2497&quality=43 2497w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3198&quality=42 3198w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096&quality=40 4096w'
      )
    })

    it('returns srcset with sequence of widths', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: sequence(100, 4096, 6) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096 4096w'
      )
    })

    it('returns srcset with sequence of widths and range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: sequence(100, 4096, 6), quality: range(70, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&quality=70 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210&quality=63 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442&quality=56 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928&quality=50 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949&quality=45 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096&quality=40 4096w'
      )
    })

    it('returns srcset with empty array of widths', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192 8192w'
      )
    })

    it('returns srcset with array of widths of size 1', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200 200w')
    })

    it('returns srcset with array of widths', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400 400w'
      )
    })

    it('returns srcset with array of widths and range of heights', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400], height: range(300, 500) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=387 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500 400w'
      )
    })

    it('returns srcset with array of widths and empty array of heights', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400], height: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height= 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height= 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height= 400w'
      )
    })

    it('returns srcset with array of widths and array of heights of size 1', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400], height: [300] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height= 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height= 400w'
      )
    })

    it('returns srcset with array of widths and array of heights', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400], height: [300, 400, 500] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=400 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500 400w'
      )
    })

    it('returns srcset with array of widths and range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400], quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality=55 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality=40 400w'
      )
    })

    it('returns srcset with array of widths and empty array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400], quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality= 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality= 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality= 400w'
      )
    })

    it('returns srcset with array of widths and array of qualities of size 1', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400], quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality= 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality= 400w'
      )
    })

    it('returns srcset with array of widths and array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality=70 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality=65 400w'
      )
    })

    it('returns srcset with array of widths, range of heights and range of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400], height: range(300, 500), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=387&quality=55 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500&quality=40 400w'
      )
    })

    it('returns srcset with array of widths, array of heights and array of qualities', () => {
      const srcset = Srcset.srcset('assets', 'example.jpeg', { width: [200, 300, 400], height: [300, 400, 500], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=400&quality=70 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500&quality=65 400w'
      )
    })

    it('throws a new error when width is fluid and dpr is also fluid', () => {
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { width: range(100, 300), dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { width: range(100, 300), dpr: [1, 2, 3] }) }).toThrow(Error)
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { width: [100, 200, 300], dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { width: [100, 200, 300], dpr: [1, 2, 3] }) }).toThrow(Error)
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { width: sequence(100, 300), dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { width: sequence(100, 300), dpr: [1, 2, 3] }) }).toThrow(Error)
    })

    it('throws a new error when width is not fluid and height is fluid', () => {
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { height: range(100, 300) }) }).toThrow(Error)
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { height: [100, 200, 300] }) }).toThrow(Error)
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { width: 100, height: range(100, 300) }) }).toThrow(Error)
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { width: 100, height: [100, 200, 300] }) }).toThrow(Error)
    })

    it('throws a new error when width and height are not specified and dpr is fluid', () => {
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset('assets', 'example.jpeg', { dpr: [1, 2, 3] }) }).toThrow(Error)
    })
  })

  describe('srcset using source', () => {
    it('returns srcset without params', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg')

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192 8192w'
      )
    })

    it('returns srcset without size params', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { aspectRatio: '16:9', format: 'png' })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=8192 8192w'
      )
    })

    it('returns srcset with null width', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192 8192w'
      )
    })

    it('returns srcset with undefined width', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192 8192w'
      )
    })

    it('returns srcset with null height', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=8192 8192w'
      )
    })

    it('returns srcset with undefined height', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=8192 8192w'
      )
    })

    it('returns srcset without widht, without height and with fixed quality', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with null quality', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { quality: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with undefined quality', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { quality: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=72&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=69&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=66&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=63&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=61&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=58&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=56&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=54&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=51&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=49&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=47&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=45&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=43&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=42&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=40&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with empty array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with array of qualities of size 1', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192 8192w'
      )
    })

    it('returns srcset without width, without height and with array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=70&width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=65&width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192 8192w'
      )
    })

    it('returns srcset with fixed width', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and fixed dpr', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, dpr: 2 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and null dpr', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, dpr: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and undefined dpr', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, dpr: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and range of dprs', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, dpr: range(1, 4) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x'
      )
    })

    it('returns srcset with fixed width and empty array of dprs', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, dpr: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and array of dprs of size 1', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, dpr: [1] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x')
    })

    it('returns srcset with fixed width and array of dprs', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, dpr: [1, 2, 3] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3 3x'
      )
    })

    it('returns srcset with fixed width and fixed quality', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and null quality', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, quality: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and undefined quality', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, quality: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=66&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=58&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=51&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=45&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=40&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and empty array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and array of qualities of size 1', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width and array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=70&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=65&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, range of dprs and range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, dpr: range(1, 4), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&quality=61 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&quality=49 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4&quality=40 4x'
      )
    })

    it('returns srcset with fixed width, list of dprs and array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, dpr: [1, 2, 3], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&quality=70 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&quality=65 3x'
      )
    })

    it('returns srcset with fixed height', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and fixed dpr', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, dpr: 2 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and null dpr', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, dpr: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and undefined dpr', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, dpr: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and range of dprs', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, dpr: range(1, 4) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x'
      )
    })

    it('returns srcset with fixed height and empty array of dprs', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, dpr: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and array of dprs of size 1', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, dpr: [1] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x')
    })

    it('returns srcset with fixed height and array of dprs', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, dpr: [1, 2, 3] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3 3x'
      )
    })

    it('returns srcset with fixed height and fixed quality', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and null quality', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, quality: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and undefined quality', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, quality: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=66&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=58&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=51&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=45&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=40&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and empty array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and array of qualities of size 1', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height and array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=70&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=65&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed height, range of dprs and range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, dpr: range(1, 4), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&quality=61 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&quality=49 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4&quality=40 4x'
      )
    })

    it('returns srcset with fixed height, array of dprs and array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { height: 200, dpr: [1, 2, 3], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&quality=70 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&quality=65 3x'
      )
    })

    it('returns srcset with fixed width and fixed height', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and fixed dpr', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: 2 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and range of dprs', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: range(1, 4) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4 4x'
      )
    })

    it('returns srcset with fixed width, fixed height and array list of dprs', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and array of dprs of size 1', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: [1] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x')
    })

    it('returns srcset with fixed width, fixed height and array of dprs', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: [1, 2, 3] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3 3x'
      )
    })

    it('returns srcset with fixed width, fixed height and fixed quality', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=66&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=58&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=51&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=45&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=40&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and empty array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and array of qualities of size 1', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=70&dpr=2 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=65&dpr=3 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=4 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=5 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=6 6x'
      )
    })

    it('returns srcset with fixed width, fixed height, range of dprs and range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: range(1, 4), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&quality=61 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&quality=49 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4&quality=40 4x'
      )
    })

    it('returns srcset with fixed width, fixed height, array of dprs and arry of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: [1, 2, 3], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&quality=75 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&quality=70 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&quality=65 3x'
      )
    })

    it('returns srcset with range of widths', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: range(100, 4096) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=128 128w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=164 164w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=269 269w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=345 345w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=566 566w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=724 724w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1188 1188w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1522 1522w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2497 2497w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3198 3198w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096 4096w'
      )
    })

    it('returns srcset with range of widths and range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: range(100, 4096), quality: range(70, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&quality=70 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=128&quality=67 128w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=164&quality=65 164w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210&quality=63 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=269&quality=60 269w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=345&quality=58 345w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442&quality=56 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=566&quality=54 566w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=724&quality=52 724w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928&quality=50 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1188&quality=48 1188w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1522&quality=46 1522w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949&quality=45 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2497&quality=43 2497w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3198&quality=42 3198w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096&quality=40 4096w'
      )
    })

    it('returns srcset with sequence of widths', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: sequence(100, 4096, 6) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096 4096w'
      )
    })

    it('returns srcset with sequence of widths and range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: sequence(100, 4096, 6), quality: range(70, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&quality=70 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210&quality=63 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442&quality=56 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928&quality=50 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949&quality=45 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096&quality=40 4096w'
      )
    })

    it('returns srcset with empty array of widths', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192 8192w'
      )
    })

    it('returns srcset with array of widths of size 1', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200 200w')
    })

    it('returns srcset with array of widths', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400 400w'
      )
    })

    it('returns srcset with array of widths and range of heights', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400], height: range(300, 500) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=387 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500 400w'
      )
    })

    it('returns srcset with array of widths and empty array of heights', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400], height: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height= 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height= 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height= 400w'
      )
    })

    it('returns srcset with array of widths and array of heights of size 1', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400], height: [300] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height= 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height= 400w'
      )
    })

    it('returns srcset with array of widths and array of heights', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400], height: [300, 400, 500] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=400 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500 400w'
      )
    })

    it('returns srcset with array of widths and range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400], quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality=55 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality=40 400w'
      )
    })

    it('returns srcset with array of widths and empty array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400], quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality= 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality= 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality= 400w'
      )
    })

    it('returns srcset with array of widths and array of qualities of size 1', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400], quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality= 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality= 400w'
      )
    })

    it('returns srcset with array of widths and array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality=70 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality=65 400w'
      )
    })

    it('returns srcset with array of widths, range of heights and range of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400], height: range(300, 500), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=387&quality=55 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500&quality=40 400w'
      )
    })

    it('returns srcset with array of widths, array of heights and array of qualities', () => {
      const srcset = Srcset.srcset(SOURCE, 'example.jpeg', { width: [200, 300, 400], height: [300, 400, 500], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=400&quality=70 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500&quality=65 400w'
      )
    })

    it('throws a new error when width is fluid and dpr is also fluid', () => {
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { width: range(100, 300), dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { width: range(100, 300), dpr: [1, 2, 3] }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { width: [100, 200, 300], dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { width: [100, 200, 300], dpr: [1, 2, 3] }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { width: sequence(100, 300), dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { width: sequence(100, 300), dpr: [1, 2, 3] }) }).toThrow(Error)
    })

    it('throws a new error when width is not fluid and height is fluid', () => {
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { height: range(100, 300) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { height: [100, 200, 300] }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { width: 100, height: range(100, 300) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { width: 100, height: [100, 200, 300] }) }).toThrow(Error)
    })

    it('throws a new error when width and height are not specified and dpr is fluid', () => {
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SOURCE, 'example.jpeg', { dpr: [1, 2, 3] }) }).toThrow(Error)
    })
  })

  describe('srcset using secure source', () => {
    it('returns srcset without params', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg')

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&signature=-G7slD-ae7GdT1lx8I0-7iUMnkMTU3NcTGB8GzaiaNg 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134&signature=fHLmra9mxfjnp8E-7Cj7AZlJ43kRKLILUQ3Gawa0pxA 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180&signature=omMuwPcMxKVGGnDk9sR2G6qD28uLIAldc-N9FvhwSH0 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241&signature=09nboU72WGyryf9zyxMsNyBNu4PUrrGkuDlbM6shYas 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324&signature=KOLqtvfSwSLUKnWY5-tvuaj-pOsBcN_WIHRTNLpJ7-Y 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434&signature=48LOvc3n4CqstYfikmhT57XvKnydLRUa6qT-_IqZ0io 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583&signature=IfEEELQp0__u7Ip-qzKQ2Plw70ybDOdrVeOz5jw9BOY 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781&signature=p6sa4yVVce8AkuJagwLolgRD1nQUyzZsMw68KSQaVwM 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048&signature=qz5KgcQRJHnCcubs9ldfGUGm1vzsvjBge17OWhykwp0 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406&signature=Kh16qduc4dixmTKuhASbspncSVHlDTd4DnsbcmfB6Mw 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886&signature=WN-YBqlX-bhiWxFydOVBsfkVIWjIuz09qvHkA2UZWvs 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530&signature=wH5aHb7P0S6xuJvBDoPgZPIo2-nosgViwt2ADVGhAvw 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394&signature=e_fi5Y-uruuUWips4wxJt5WkHKETn9P1MmHXVD9Cvxs 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553&signature=AuXvD4c7FN279MOC63ogznGAqYmHqLCVDgQvl0I1IKM 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107&signature=nWDdC0v7d695Oo_bdhgc_AkxCkIyF7FSZgj7bAcOkNo 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192&signature=HNmtIa6jhuc8o3Yir2zZBjDvgiiAwGeMzM-x7ow1dSE 8192w'
      )
    })

    it('returns srcset without size params', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { aspectRatio: '16:9', format: 'png' })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=100&signature=NbJJwFNLXH2Lm04Vlq0bx4mQx8CAR4N_abDW4dGpPh8 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=134&signature=YReBU7g45tkZKQcSM0KCJHEBgy98F10a4ndYE5RAYZE 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=180&signature=cOHBLDWqFJYn3G5wSy7h10EbClkHU0pPk3vF6306hew 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=241&signature=RNLjPSNlme7d3UgJkuFScYmjquG1pWALFZcQmNcFaDs 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=324&signature=Oui_yhAccLk3qvOjb2BsPcItb4OQKRmdmEfEXO5RGf0 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=434&signature=yjSD343Tj-8iIUTCyhrTN0sgScsKOeZgRzwHRh0lbBk 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=583&signature=gPV3Gms4q38hj93EhxL1Ho0ZC-GkEDSuHbzs624eDyo 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=781&signature=69h4C_4odnjjo9DTDU8esuM9kDCPqSui8h1OFQH3GMs 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=1048&signature=5ULJml6M2hoExOZ20Ki1nt7dtqvvNSffb33iInBZocc 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=1406&signature=3aGhzUlEYZhMywzE5vfNphpJAtZWU0L-P3i6k26Fqvo 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=1886&signature=B2b4-1PIflt5BDQfcIm6G0OxLxQFNavbORPkukVuhPc 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=2530&signature=HjNxP9QSHyEP6iDZv1TgbGoNHRb57ncfPYdVWPawYgM 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=3394&signature=Rv1AyIY0-IGNb6G8cPOdRBmm6l3HB0cPYoL66qCcnhc 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=4553&signature=Ct7Kh3NAf8MZ_NsalXBymsdhrcF-BoKnwblXKNXQuGY 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=6107&signature=JazBYsfM0U0RJV0SdbbGBZznDRT6bHd8_Kc6uinl4Hs 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?aspect-ratio=16%3A9&format=png&width=8192&signature=-JvRN7tWRXGNDc1KABnZv5RmZ_FgTUsOUum3XXF1fxE 8192w'
      )
    })

    it('returns srcset with null width', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&signature=-G7slD-ae7GdT1lx8I0-7iUMnkMTU3NcTGB8GzaiaNg 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134&signature=fHLmra9mxfjnp8E-7Cj7AZlJ43kRKLILUQ3Gawa0pxA 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180&signature=omMuwPcMxKVGGnDk9sR2G6qD28uLIAldc-N9FvhwSH0 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241&signature=09nboU72WGyryf9zyxMsNyBNu4PUrrGkuDlbM6shYas 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324&signature=KOLqtvfSwSLUKnWY5-tvuaj-pOsBcN_WIHRTNLpJ7-Y 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434&signature=48LOvc3n4CqstYfikmhT57XvKnydLRUa6qT-_IqZ0io 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583&signature=IfEEELQp0__u7Ip-qzKQ2Plw70ybDOdrVeOz5jw9BOY 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781&signature=p6sa4yVVce8AkuJagwLolgRD1nQUyzZsMw68KSQaVwM 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048&signature=qz5KgcQRJHnCcubs9ldfGUGm1vzsvjBge17OWhykwp0 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406&signature=Kh16qduc4dixmTKuhASbspncSVHlDTd4DnsbcmfB6Mw 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886&signature=WN-YBqlX-bhiWxFydOVBsfkVIWjIuz09qvHkA2UZWvs 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530&signature=wH5aHb7P0S6xuJvBDoPgZPIo2-nosgViwt2ADVGhAvw 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394&signature=e_fi5Y-uruuUWips4wxJt5WkHKETn9P1MmHXVD9Cvxs 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553&signature=AuXvD4c7FN279MOC63ogznGAqYmHqLCVDgQvl0I1IKM 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107&signature=nWDdC0v7d695Oo_bdhgc_AkxCkIyF7FSZgj7bAcOkNo 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192&signature=HNmtIa6jhuc8o3Yir2zZBjDvgiiAwGeMzM-x7ow1dSE 8192w'
      )
    })

    it('returns srcset with undefined width', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&signature=-G7slD-ae7GdT1lx8I0-7iUMnkMTU3NcTGB8GzaiaNg 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134&signature=fHLmra9mxfjnp8E-7Cj7AZlJ43kRKLILUQ3Gawa0pxA 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180&signature=omMuwPcMxKVGGnDk9sR2G6qD28uLIAldc-N9FvhwSH0 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241&signature=09nboU72WGyryf9zyxMsNyBNu4PUrrGkuDlbM6shYas 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324&signature=KOLqtvfSwSLUKnWY5-tvuaj-pOsBcN_WIHRTNLpJ7-Y 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434&signature=48LOvc3n4CqstYfikmhT57XvKnydLRUa6qT-_IqZ0io 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583&signature=IfEEELQp0__u7Ip-qzKQ2Plw70ybDOdrVeOz5jw9BOY 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781&signature=p6sa4yVVce8AkuJagwLolgRD1nQUyzZsMw68KSQaVwM 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048&signature=qz5KgcQRJHnCcubs9ldfGUGm1vzsvjBge17OWhykwp0 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406&signature=Kh16qduc4dixmTKuhASbspncSVHlDTd4DnsbcmfB6Mw 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886&signature=WN-YBqlX-bhiWxFydOVBsfkVIWjIuz09qvHkA2UZWvs 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530&signature=wH5aHb7P0S6xuJvBDoPgZPIo2-nosgViwt2ADVGhAvw 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394&signature=e_fi5Y-uruuUWips4wxJt5WkHKETn9P1MmHXVD9Cvxs 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553&signature=AuXvD4c7FN279MOC63ogznGAqYmHqLCVDgQvl0I1IKM 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107&signature=nWDdC0v7d695Oo_bdhgc_AkxCkIyF7FSZgj7bAcOkNo 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192&signature=HNmtIa6jhuc8o3Yir2zZBjDvgiiAwGeMzM-x7ow1dSE 8192w'
      )
    })

    it('returns srcset with null height', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=100&signature=qgGwAacGLubPw_MV9gGsqSQxZwwwF6o3xrhsF7oZzeo 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=134&signature=A1X1Ufip8Y3a-Kx8RSbr3BKPK7sTokKuFQrY-Xa_24c 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=180&signature=yXqfS97rINsU0CSax5otWFNKMmvkrAPpRxobREUtdSs 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=241&signature=_Ugb6sjZCvH7O5Pz2JMFqacKrBOFz_3vsLxjTF9kclo 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=324&signature=sAIh1BhsFC1DyHWF0CFh0a-LAcy_loT2ElJspyC7vqY 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=434&signature=H02oPLw1sbftKYXoJc5AXH1cKWIXUzACNpiVxM-GUyY 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=583&signature=R8xJ-AkDk_zaTYM5ED7TgvQWTLwA5cZLs_jyuQGCiZk 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=781&signature=7PmZrtuoJOmMat6De-t8ymptJu9n9FQ7Gxn7pa2piW8 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1048&signature=F8lJX64AcJfvss69fZbINKoPd7cbKHCRlYjX1z1_dsg 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1406&signature=txn8esJ7vIqkgkZvwdKRSS53E3uf-7j1Yb8f0dIRlw4 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1886&signature=wR2DposN7ibU8Dl9MzzjePe9AWVK1ox4xVV4CQ0OghY 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=2530&signature=zeDRRPL4BFfFg_rtCXTeFmsTT_C9kM0ntAghLVoazTs 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=3394&signature=CLIANKNBnTruPtrwmcbE8dqKgi5ft_ffTM2mH8kNvFo 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=4553&signature=Dn-shQtSttRLPh0j3fbUte7JkwWy4--nXbRJON0Dcqs 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=6107&signature=3F0v4wxNyoSunFplHbQps4EeLuQCLtVxDXfEi_GTYNE 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=8192&signature=ZhwS0bA6DmRns1bv1FuLw9r1Fg8Y46JixHRgvpiiwhw 8192w'
      )
    })

    it('returns srcset with undefined height', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=100&signature=qgGwAacGLubPw_MV9gGsqSQxZwwwF6o3xrhsF7oZzeo 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=134&signature=A1X1Ufip8Y3a-Kx8RSbr3BKPK7sTokKuFQrY-Xa_24c 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=180&signature=yXqfS97rINsU0CSax5otWFNKMmvkrAPpRxobREUtdSs 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=241&signature=_Ugb6sjZCvH7O5Pz2JMFqacKrBOFz_3vsLxjTF9kclo 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=324&signature=sAIh1BhsFC1DyHWF0CFh0a-LAcy_loT2ElJspyC7vqY 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=434&signature=H02oPLw1sbftKYXoJc5AXH1cKWIXUzACNpiVxM-GUyY 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=583&signature=R8xJ-AkDk_zaTYM5ED7TgvQWTLwA5cZLs_jyuQGCiZk 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=781&signature=7PmZrtuoJOmMat6De-t8ymptJu9n9FQ7Gxn7pa2piW8 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1048&signature=F8lJX64AcJfvss69fZbINKoPd7cbKHCRlYjX1z1_dsg 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1406&signature=txn8esJ7vIqkgkZvwdKRSS53E3uf-7j1Yb8f0dIRlw4 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=1886&signature=wR2DposN7ibU8Dl9MzzjePe9AWVK1ox4xVV4CQ0OghY 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=2530&signature=zeDRRPL4BFfFg_rtCXTeFmsTT_C9kM0ntAghLVoazTs 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=3394&signature=CLIANKNBnTruPtrwmcbE8dqKgi5ft_ffTM2mH8kNvFo 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=4553&signature=Dn-shQtSttRLPh0j3fbUte7JkwWy4--nXbRJON0Dcqs 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=6107&signature=3F0v4wxNyoSunFplHbQps4EeLuQCLtVxDXfEi_GTYNE 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=&width=8192&signature=ZhwS0bA6DmRns1bv1FuLw9r1Fg8Y46JixHRgvpiiwhw 8192w'
      )
    })

    it('returns srcset without widht, without height and with fixed quality', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100&signature=MdlVEFrlbd_uNGEjZM1ALuGWIS-cZl1DGDhSDvDhato 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=134&signature=pSG9vgEsdniuyEUZ8r0Wfd_CNgFvbDmtUayIwPXTsPg 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=180&signature=291PUFY7rMNz2DxtTY5dcGxGYiwRnJD7ye7tgf-GZ8Y 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=241&signature=qn_UwdsTfRFtk-yq8arB5yo41372mzsdh26-AYAqMHQ 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=324&signature=8XELAadBAAFYQnae37ObGZA49oE8W9b5yF_pY3QVJQY 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=434&signature=U6NzmJJxrXm4KRyWZqQL6LwSVF4HygXHT_vYfvQI5xI 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=583&signature=XkXvyNCm4KUHS-fLzepPC1603et-ew3PH3CN_tQD6n8 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=781&signature=iPlNimegR3djYwTchz85-KFPY93d8aMTKcpzrzKNbKs 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=1048&signature=Ftqj-AGOCC0acyBIo18V8Epm6g82tiuHvq8I_djY0Ks 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=1406&signature=BsjFTuWi9ilETulFFJB-IEdxw-e_CWRBgnlDImz6-gc 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=1886&signature=E2TXXvpUm5eyljOQ7uG3i73ok1XBBLsm6AqW5zVTmN4 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=2530&signature=Dh7vfyl2hBMd1cD6YTJkHbmcA-0ZCi06HigvPaIlFSM 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=3394&signature=zHRSwjveBPRWo03Dn9dN7zjrewa7FpfF3Wb9aUi7bYM 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=4553&signature=yLwCeLEr1CHxb_zuPQSSbssejnsdGNqNLdTOj1D4ZsA 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=6107&signature=2GEzlHKTq98nTa5ObpB6-ARv8q8W-uHm19Vumzz-k2I 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=8192&signature=ShTkNRkOycgMAkCOKln6DPFCjM2673LNGaZPI2omGbo 8192w'
      )
    })

    it('returns srcset without width, without height and with null quality', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { quality: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=100&signature=vyUqI3Rk41lOSzhE0HAwl73gOfN6ERg6OOmq9Ysa1SU 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134&signature=uy5848AZSPUeFGwSV27yLlGclqYU1oBpo1rsOow-pNo 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180&signature=Ozgkx_JvAEICkszdoclwuWmZ5BEjyIDVZJNDl_O0aqg 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241&signature=Jf9HPL2I0D9zNDGALITPlbMapmO1-aUsbiM5FqnczFc 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324&signature=ff6JAgBW2sAPl1PfQGwkLPWUEkzfQts4mUe-bFLZ3Ec 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434&signature=GldXfzEEI2N6SZk9IbeXLPxMlRcSRoEWO8e3Zpp8PH8 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583&signature=5ebKNVmrlDGyQQVQcjbk0vAvmU_l1jtSpHkMxFxlbBw 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781&signature=jJd3B8wzvTjwqIFHmB4ZXLHonbw-EQLCiE6TiHRT0tw 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048&signature=DAxsrxK-VqaF-QaEoZru83yuhX2MV5oakelAn8-Jpb8 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406&signature=UHqCY93GXmZh9WmR3ZypL-nv4mpcexghu2LXlUiLv10 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886&signature=b6PhbtD5_uFpHj1VFCbP4_06ZhhZOBlYH-p0mGub8yI 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530&signature=3XIFh6uFYxgO7yNh_6EmQ7cZp9UMYsB0AdRzpaebvSM 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394&signature=gKVMiRqju-04c5xloACa4Wb1qYR2_zLtk00Cu5ZDIzI 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553&signature=jRUdh9g9bPeALalAepKCSBwr2bSU3mI5jS7HMaekhyc 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107&signature=nCkD13Of8MMZpopYN4RSEsZwhLNT3dsi3AFarXaPKTU 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192&signature=Ax9PBsp9q8KWyQiFyFaOnKdxWN6aY9RFWZpTE_sj9iQ 8192w'
      )
    })

    it('returns srcset without width, without height and with undefined quality', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { quality: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=100&signature=vyUqI3Rk41lOSzhE0HAwl73gOfN6ERg6OOmq9Ysa1SU 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134&signature=uy5848AZSPUeFGwSV27yLlGclqYU1oBpo1rsOow-pNo 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180&signature=Ozgkx_JvAEICkszdoclwuWmZ5BEjyIDVZJNDl_O0aqg 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241&signature=Jf9HPL2I0D9zNDGALITPlbMapmO1-aUsbiM5FqnczFc 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324&signature=ff6JAgBW2sAPl1PfQGwkLPWUEkzfQts4mUe-bFLZ3Ec 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434&signature=GldXfzEEI2N6SZk9IbeXLPxMlRcSRoEWO8e3Zpp8PH8 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583&signature=5ebKNVmrlDGyQQVQcjbk0vAvmU_l1jtSpHkMxFxlbBw 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781&signature=jJd3B8wzvTjwqIFHmB4ZXLHonbw-EQLCiE6TiHRT0tw 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048&signature=DAxsrxK-VqaF-QaEoZru83yuhX2MV5oakelAn8-Jpb8 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406&signature=UHqCY93GXmZh9WmR3ZypL-nv4mpcexghu2LXlUiLv10 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886&signature=b6PhbtD5_uFpHj1VFCbP4_06ZhhZOBlYH-p0mGub8yI 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530&signature=3XIFh6uFYxgO7yNh_6EmQ7cZp9UMYsB0AdRzpaebvSM 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394&signature=gKVMiRqju-04c5xloACa4Wb1qYR2_zLtk00Cu5ZDIzI 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553&signature=jRUdh9g9bPeALalAepKCSBwr2bSU3mI5jS7HMaekhyc 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107&signature=nCkD13Of8MMZpopYN4RSEsZwhLNT3dsi3AFarXaPKTU 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192&signature=Ax9PBsp9q8KWyQiFyFaOnKdxWN6aY9RFWZpTE_sj9iQ 8192w'
      )
    })

    it('returns srcset without width, without height and with range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100&signature=MdlVEFrlbd_uNGEjZM1ALuGWIS-cZl1DGDhSDvDhato 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=72&width=134&signature=Fh2C6Vf_0ivpN4fANWjW3yBUSseFL7kLEnQ9AqUh_94 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=69&width=180&signature=5UBJKCNaufIBc9SXsQTv_0vA9ADGPBvNAxInQZYfcVk 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=66&width=241&signature=t8trQBaYqW9xzz9bFEcW__1yfGLqEeacpZyfGauGvc0 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=63&width=324&signature=yhbdd6qiTmJmCX_PobKv_5zwMp1RDACCMvKkDhXRBVY 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=61&width=434&signature=yGYu0jjKy6r6aygEWC-ew85-6xTcVTtsvR1Cb1qF9OM 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=58&width=583&signature=N0ItLybI-R3NFwOtYQZMfbRzIVfiuEd5XFW39rZwxiA 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=56&width=781&signature=7UX9-2xa32IHajJgzeNC-q2ut9bWGHYFAAR-f5TclUc 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=54&width=1048&signature=LTqNlXbgql-IlWCjZ_NDE4upRfP2edc0hW5Lnm17AH8 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=51&width=1406&signature=xDju3Exs-kzpaU9gWcUdShhiygjxu2zsuSNnP7aOpLM 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=49&width=1886&signature=F49-uX9mQaAlieoq32QY-gv1JOwAzo_8DTRM54Blm7w 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=47&width=2530&signature=dl3xzdKQDwPTAMC2X35P4oWPvLhKj2CqHYtMsadeJxU 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=45&width=3394&signature=Qk7S4REwQNBocNQL4Lr-urMOVljtB8AAWmiXYSrYkV0 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=43&width=4553&signature=gzFsF5t-vOZbmzQcaDnFk058hzFFATqWI7eZ9FFCa20 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=42&width=6107&signature=h8T3dTy7tWObEYVzFHb_Nre8rfSTidhqCcUPNnO7-9E 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=40&width=8192&signature=nw1YyvOX5-5QGR_WAlj-f7Y0j69LS68wXKbv-JiNZXs 8192w'
      )
    })

    it('returns srcset without width, without height and with empty array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=100&signature=vyUqI3Rk41lOSzhE0HAwl73gOfN6ERg6OOmq9Ysa1SU 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134&signature=uy5848AZSPUeFGwSV27yLlGclqYU1oBpo1rsOow-pNo 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180&signature=Ozgkx_JvAEICkszdoclwuWmZ5BEjyIDVZJNDl_O0aqg 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241&signature=Jf9HPL2I0D9zNDGALITPlbMapmO1-aUsbiM5FqnczFc 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324&signature=ff6JAgBW2sAPl1PfQGwkLPWUEkzfQts4mUe-bFLZ3Ec 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434&signature=GldXfzEEI2N6SZk9IbeXLPxMlRcSRoEWO8e3Zpp8PH8 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583&signature=5ebKNVmrlDGyQQVQcjbk0vAvmU_l1jtSpHkMxFxlbBw 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781&signature=jJd3B8wzvTjwqIFHmB4ZXLHonbw-EQLCiE6TiHRT0tw 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048&signature=DAxsrxK-VqaF-QaEoZru83yuhX2MV5oakelAn8-Jpb8 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406&signature=UHqCY93GXmZh9WmR3ZypL-nv4mpcexghu2LXlUiLv10 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886&signature=b6PhbtD5_uFpHj1VFCbP4_06ZhhZOBlYH-p0mGub8yI 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530&signature=3XIFh6uFYxgO7yNh_6EmQ7cZp9UMYsB0AdRzpaebvSM 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394&signature=gKVMiRqju-04c5xloACa4Wb1qYR2_zLtk00Cu5ZDIzI 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553&signature=jRUdh9g9bPeALalAepKCSBwr2bSU3mI5jS7HMaekhyc 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107&signature=nCkD13Of8MMZpopYN4RSEsZwhLNT3dsi3AFarXaPKTU 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192&signature=Ax9PBsp9q8KWyQiFyFaOnKdxWN6aY9RFWZpTE_sj9iQ 8192w'
      )
    })

    it('returns srcset without width, without height and with array of qualities of size 1', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100&signature=MdlVEFrlbd_uNGEjZM1ALuGWIS-cZl1DGDhSDvDhato 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=134&signature=uy5848AZSPUeFGwSV27yLlGclqYU1oBpo1rsOow-pNo 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=180&signature=Ozgkx_JvAEICkszdoclwuWmZ5BEjyIDVZJNDl_O0aqg 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241&signature=Jf9HPL2I0D9zNDGALITPlbMapmO1-aUsbiM5FqnczFc 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324&signature=ff6JAgBW2sAPl1PfQGwkLPWUEkzfQts4mUe-bFLZ3Ec 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434&signature=GldXfzEEI2N6SZk9IbeXLPxMlRcSRoEWO8e3Zpp8PH8 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583&signature=5ebKNVmrlDGyQQVQcjbk0vAvmU_l1jtSpHkMxFxlbBw 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781&signature=jJd3B8wzvTjwqIFHmB4ZXLHonbw-EQLCiE6TiHRT0tw 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048&signature=DAxsrxK-VqaF-QaEoZru83yuhX2MV5oakelAn8-Jpb8 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406&signature=UHqCY93GXmZh9WmR3ZypL-nv4mpcexghu2LXlUiLv10 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886&signature=b6PhbtD5_uFpHj1VFCbP4_06ZhhZOBlYH-p0mGub8yI 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530&signature=3XIFh6uFYxgO7yNh_6EmQ7cZp9UMYsB0AdRzpaebvSM 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394&signature=gKVMiRqju-04c5xloACa4Wb1qYR2_zLtk00Cu5ZDIzI 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553&signature=jRUdh9g9bPeALalAepKCSBwr2bSU3mI5jS7HMaekhyc 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107&signature=nCkD13Of8MMZpopYN4RSEsZwhLNT3dsi3AFarXaPKTU 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192&signature=Ax9PBsp9q8KWyQiFyFaOnKdxWN6aY9RFWZpTE_sj9iQ 8192w'
      )
    })

    it('returns srcset without width, without height and with array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?quality=75&width=100&signature=MdlVEFrlbd_uNGEjZM1ALuGWIS-cZl1DGDhSDvDhato 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=70&width=134&signature=JJ1R-D0Y2uIxbuGndKiD9ybH7nCvqrH-AFCMEJ0wFFY 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=65&width=180&signature=gfTHds7_QB0Jw68RnDs1D3Hwq_MQ934IJsovJ9ewFOU 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=241&signature=Jf9HPL2I0D9zNDGALITPlbMapmO1-aUsbiM5FqnczFc 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=324&signature=ff6JAgBW2sAPl1PfQGwkLPWUEkzfQts4mUe-bFLZ3Ec 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=434&signature=GldXfzEEI2N6SZk9IbeXLPxMlRcSRoEWO8e3Zpp8PH8 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=583&signature=5ebKNVmrlDGyQQVQcjbk0vAvmU_l1jtSpHkMxFxlbBw 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=781&signature=jJd3B8wzvTjwqIFHmB4ZXLHonbw-EQLCiE6TiHRT0tw 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1048&signature=DAxsrxK-VqaF-QaEoZru83yuhX2MV5oakelAn8-Jpb8 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1406&signature=UHqCY93GXmZh9WmR3ZypL-nv4mpcexghu2LXlUiLv10 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=1886&signature=b6PhbtD5_uFpHj1VFCbP4_06ZhhZOBlYH-p0mGub8yI 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=2530&signature=3XIFh6uFYxgO7yNh_6EmQ7cZp9UMYsB0AdRzpaebvSM 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=3394&signature=gKVMiRqju-04c5xloACa4Wb1qYR2_zLtk00Cu5ZDIzI 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=4553&signature=jRUdh9g9bPeALalAepKCSBwr2bSU3mI5jS7HMaekhyc 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=6107&signature=nCkD13Of8MMZpopYN4RSEsZwhLNT3dsi3AFarXaPKTU 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?quality=&width=8192&signature=Ax9PBsp9q8KWyQiFyFaOnKdxWN6aY9RFWZpTE_sj9iQ 8192w'
      )
    })

    it('returns srcset with fixed width', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&signature=Dt2QjQRTGriKiEL8b4bd1oR0s4kk_YR-t5ip9FG_8r4 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&signature=ENOlJPVnPCsCl7xWghj4y-jeBPHvSaK9LG5r9gvf_14 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&signature=Kx4REMpTxLA00Wt-NWM9dw8wML441Ok0C1nmATDVcho 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4&signature=M3Jtp4O7QfsDJkCEiC48pRrscdCp8Pw_qz5l_HwfTdg 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5&signature=65EB3f_-13GfS8Sfq_cQ1AHCkSmDYgaWkeFCF69vwEw 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6&signature=1H6iBT7iifEFXYFdg016xjF0HnQljOki5z4acr2kRF0 6x'
      )
    })

    it('returns srcset with fixed width and fixed dpr', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, dpr: 2 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&signature=Dt2QjQRTGriKiEL8b4bd1oR0s4kk_YR-t5ip9FG_8r4 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&signature=ENOlJPVnPCsCl7xWghj4y-jeBPHvSaK9LG5r9gvf_14 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&signature=Kx4REMpTxLA00Wt-NWM9dw8wML441Ok0C1nmATDVcho 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4&signature=M3Jtp4O7QfsDJkCEiC48pRrscdCp8Pw_qz5l_HwfTdg 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5&signature=65EB3f_-13GfS8Sfq_cQ1AHCkSmDYgaWkeFCF69vwEw 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6&signature=1H6iBT7iifEFXYFdg016xjF0HnQljOki5z4acr2kRF0 6x'
      )
    })

    it('returns srcset with fixed width and null dpr', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, dpr: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&signature=Dt2QjQRTGriKiEL8b4bd1oR0s4kk_YR-t5ip9FG_8r4 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&signature=ENOlJPVnPCsCl7xWghj4y-jeBPHvSaK9LG5r9gvf_14 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&signature=Kx4REMpTxLA00Wt-NWM9dw8wML441Ok0C1nmATDVcho 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4&signature=M3Jtp4O7QfsDJkCEiC48pRrscdCp8Pw_qz5l_HwfTdg 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5&signature=65EB3f_-13GfS8Sfq_cQ1AHCkSmDYgaWkeFCF69vwEw 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6&signature=1H6iBT7iifEFXYFdg016xjF0HnQljOki5z4acr2kRF0 6x'
      )
    })

    it('returns srcset with fixed width and undefined dpr', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, dpr: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&signature=Dt2QjQRTGriKiEL8b4bd1oR0s4kk_YR-t5ip9FG_8r4 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&signature=ENOlJPVnPCsCl7xWghj4y-jeBPHvSaK9LG5r9gvf_14 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&signature=Kx4REMpTxLA00Wt-NWM9dw8wML441Ok0C1nmATDVcho 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4&signature=M3Jtp4O7QfsDJkCEiC48pRrscdCp8Pw_qz5l_HwfTdg 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5&signature=65EB3f_-13GfS8Sfq_cQ1AHCkSmDYgaWkeFCF69vwEw 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6&signature=1H6iBT7iifEFXYFdg016xjF0HnQljOki5z4acr2kRF0 6x'
      )
    })

    it('returns srcset with fixed width and range of dprs', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, dpr: range(1, 4) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&signature=Dt2QjQRTGriKiEL8b4bd1oR0s4kk_YR-t5ip9FG_8r4 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&signature=ENOlJPVnPCsCl7xWghj4y-jeBPHvSaK9LG5r9gvf_14 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&signature=Kx4REMpTxLA00Wt-NWM9dw8wML441Ok0C1nmATDVcho 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4&signature=M3Jtp4O7QfsDJkCEiC48pRrscdCp8Pw_qz5l_HwfTdg 4x'
      )
    })

    it('returns srcset with fixed width and empty array of dprs', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, dpr: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&signature=Dt2QjQRTGriKiEL8b4bd1oR0s4kk_YR-t5ip9FG_8r4 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&signature=ENOlJPVnPCsCl7xWghj4y-jeBPHvSaK9LG5r9gvf_14 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&signature=Kx4REMpTxLA00Wt-NWM9dw8wML441Ok0C1nmATDVcho 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4&signature=M3Jtp4O7QfsDJkCEiC48pRrscdCp8Pw_qz5l_HwfTdg 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=5&signature=65EB3f_-13GfS8Sfq_cQ1AHCkSmDYgaWkeFCF69vwEw 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=6&signature=1H6iBT7iifEFXYFdg016xjF0HnQljOki5z4acr2kRF0 6x'
      )
    })

    it('returns srcset with fixed width and array of dprs of size 1', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, dpr: [1] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&signature=Dt2QjQRTGriKiEL8b4bd1oR0s4kk_YR-t5ip9FG_8r4 1x')
    })

    it('returns srcset with fixed width and array of dprs', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, dpr: [1, 2, 3] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&signature=Dt2QjQRTGriKiEL8b4bd1oR0s4kk_YR-t5ip9FG_8r4 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&signature=ENOlJPVnPCsCl7xWghj4y-jeBPHvSaK9LG5r9gvf_14 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&signature=Kx4REMpTxLA00Wt-NWM9dw8wML441Ok0C1nmATDVcho 3x'
      )
    })

    it('returns srcset with fixed width and fixed quality', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1&signature=zf8CQyXlM8escASLnzgE-Ty32cv2LCoVMiC34IxGVZQ 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=2&signature=34do97OeAJKHeTdqcPLM0EVlzolbA0bWmBWCogQH3Hs 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=3&signature=M9uchI7N8SsJj1NWAjwkGFarhewbwn-PuJZuVvoAO9s 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=4&signature=i7zW4GGDKP4a5z65hGb2TlqdnvBQbeEr40JAn8PhEZg 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=5&signature=1hi15abMQlRMLXxERtnG2aecaHkXrBG8WUXbEEDjbyk 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=6&signature=TZg-SVdMxQbJW1jQuhU35-wQok0k3Y_pj3zBqIOz_J4 6x'
      )
    })

    it('returns srcset with fixed width and null quality', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, quality: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=1&signature=tgqva0giYvsn-FKsRYIO8d9Tm4iS85St8_ilDzFCoA4 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2&signature=blj1DwMwrUc8ZhdT-7_uExNG5PSobt3955CpsZ01SGs 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3&signature=j5lQ3w9EY6A-uHicfMakRnvy57XvE4bu6wBiHqStdDc 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4&signature=IuxCY3JrnGVfuyvdXD7TeBXwqt_ySJalNm40VSMWGPQ 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5&signature=IWR07lI3B8VmzHlrwwxgWGyt9yw01IXkd_W9zk68K3E 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6&signature=KKG086kEMT2fu4c21ybf9ZNkddU1z07ZHPzdF0X4vNk 6x'
      )
    })

    it('returns srcset with fixed width and undefined quality', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, quality: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=1&signature=tgqva0giYvsn-FKsRYIO8d9Tm4iS85St8_ilDzFCoA4 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2&signature=blj1DwMwrUc8ZhdT-7_uExNG5PSobt3955CpsZ01SGs 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3&signature=j5lQ3w9EY6A-uHicfMakRnvy57XvE4bu6wBiHqStdDc 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4&signature=IuxCY3JrnGVfuyvdXD7TeBXwqt_ySJalNm40VSMWGPQ 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5&signature=IWR07lI3B8VmzHlrwwxgWGyt9yw01IXkd_W9zk68K3E 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6&signature=KKG086kEMT2fu4c21ybf9ZNkddU1z07ZHPzdF0X4vNk 6x'
      )
    })

    it('returns srcset with fixed width and range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1&signature=zf8CQyXlM8escASLnzgE-Ty32cv2LCoVMiC34IxGVZQ 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=66&dpr=2&signature=YBES6qxx_Rs40YKoE4Mr9mWSZhXo3PXu1k9vR5pnNDU 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=58&dpr=3&signature=aprnNDUh9GiAKb7qnBuhj--3toBX-It11b0RySvrreE 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=51&dpr=4&signature=SLtY4Sat8xnYeZpVGBTvpmWe1nJdtj1pqtX0zhvbqSA 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=45&dpr=5&signature=wGAYFVmOIoHFKRH6X-FMLbtjUYdb7O4WGROFXTF8KDM 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=40&dpr=6&signature=ZJbG5VWJcYC1tV9fcNSl6h1T5GgAg7ANSftkt7nn8-E 6x'
      )
    })

    it('returns srcset with fixed width and empty array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=1&signature=tgqva0giYvsn-FKsRYIO8d9Tm4iS85St8_ilDzFCoA4 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2&signature=blj1DwMwrUc8ZhdT-7_uExNG5PSobt3955CpsZ01SGs 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3&signature=j5lQ3w9EY6A-uHicfMakRnvy57XvE4bu6wBiHqStdDc 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4&signature=IuxCY3JrnGVfuyvdXD7TeBXwqt_ySJalNm40VSMWGPQ 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5&signature=IWR07lI3B8VmzHlrwwxgWGyt9yw01IXkd_W9zk68K3E 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6&signature=KKG086kEMT2fu4c21ybf9ZNkddU1z07ZHPzdF0X4vNk 6x'
      )
    })

    it('returns srcset with fixed width and array of qualities of size 1', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1&signature=zf8CQyXlM8escASLnzgE-Ty32cv2LCoVMiC34IxGVZQ 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=2&signature=blj1DwMwrUc8ZhdT-7_uExNG5PSobt3955CpsZ01SGs 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=3&signature=j5lQ3w9EY6A-uHicfMakRnvy57XvE4bu6wBiHqStdDc 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4&signature=IuxCY3JrnGVfuyvdXD7TeBXwqt_ySJalNm40VSMWGPQ 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5&signature=IWR07lI3B8VmzHlrwwxgWGyt9yw01IXkd_W9zk68K3E 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6&signature=KKG086kEMT2fu4c21ybf9ZNkddU1z07ZHPzdF0X4vNk 6x'
      )
    })

    it('returns srcset with fixed width and array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&dpr=1&signature=zf8CQyXlM8escASLnzgE-Ty32cv2LCoVMiC34IxGVZQ 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=70&dpr=2&signature=UQWnjkkbdpin58NWsNI7fP9QnpVp3AOHQEEiTHFfAoQ 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=65&dpr=3&signature=fvJgZwx8p51mO_6ws36JssGTpJA2JZZf0213mePfHSw 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=4&signature=IuxCY3JrnGVfuyvdXD7TeBXwqt_ySJalNm40VSMWGPQ 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=5&signature=IWR07lI3B8VmzHlrwwxgWGyt9yw01IXkd_W9zk68K3E 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&dpr=6&signature=KKG086kEMT2fu4c21ybf9ZNkddU1z07ZHPzdF0X4vNk 6x'
      )
    })

    it('returns srcset with fixed width, range of dprs and range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, dpr: range(1, 4), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&quality=75&signature=djrhMfgKiQcXYPpa2JorQHj4zz-hmg1-6l6wGnX6Ovc 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&quality=61&signature=EQvDP8UcAkM6G8iaqO6FGhSZCcLRxwNVxcXq48BHQT4 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&quality=49&signature=uITEVTQ_jpkyXNtIvg67XmmKJU1g0QnG88d5pUAhe7Y 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=4&quality=40&signature=LcL5119TTi9sBdHwKX-fCbtAYst7kqqx1M7daGLr2Rg 4x'
      )
    })

    it('returns srcset with fixed width, array of dprs and array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, dpr: [1, 2, 3], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=1&quality=75&signature=djrhMfgKiQcXYPpa2JorQHj4zz-hmg1-6l6wGnX6Ovc 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=2&quality=70&signature=JFakWQFwObD94TqD71hf8X7HB6XhpTAkOcRGvaulxxI 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&dpr=3&quality=65&signature=zm3rzIUUvJTdfOkiENdcY8_900vB-QRNYHtBaZqiWIo 3x'
      )
    })

    it('returns srcset with fixed height', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&signature=OPRYWD06ACeu6W8YXkZ87-swVGCl9hCk7bPLh_wn6Cw 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&signature=4981fsA13f03qY95Xt9grU2ZyjVReTukEEGmEMaOyeU 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&signature=NYcE4xjRvJ3m8FCTwVbC30VNjuKuCJzY-pBwqMXvdLc 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4&signature=CosxSgq_XuY_XDYCDGZzMp0XHgQ45HWTTUNsfIWqAaI 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5&signature=jNdvuKhq8n1ptnvALUZ7pttVj--8wctjeDEHKlPPxtY 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6&signature=5b-Ojy9lICTxN3EoHsBWgOHhd_glloTtR7YHd6u43OM 6x'
      )
    })

    it('returns srcset with fixed height and fixed dpr', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, dpr: 2 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&signature=OPRYWD06ACeu6W8YXkZ87-swVGCl9hCk7bPLh_wn6Cw 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&signature=4981fsA13f03qY95Xt9grU2ZyjVReTukEEGmEMaOyeU 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&signature=NYcE4xjRvJ3m8FCTwVbC30VNjuKuCJzY-pBwqMXvdLc 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4&signature=CosxSgq_XuY_XDYCDGZzMp0XHgQ45HWTTUNsfIWqAaI 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5&signature=jNdvuKhq8n1ptnvALUZ7pttVj--8wctjeDEHKlPPxtY 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6&signature=5b-Ojy9lICTxN3EoHsBWgOHhd_glloTtR7YHd6u43OM 6x'
      )
    })

    it('returns srcset with fixed height and null dpr', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, dpr: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&signature=OPRYWD06ACeu6W8YXkZ87-swVGCl9hCk7bPLh_wn6Cw 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&signature=4981fsA13f03qY95Xt9grU2ZyjVReTukEEGmEMaOyeU 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&signature=NYcE4xjRvJ3m8FCTwVbC30VNjuKuCJzY-pBwqMXvdLc 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4&signature=CosxSgq_XuY_XDYCDGZzMp0XHgQ45HWTTUNsfIWqAaI 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5&signature=jNdvuKhq8n1ptnvALUZ7pttVj--8wctjeDEHKlPPxtY 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6&signature=5b-Ojy9lICTxN3EoHsBWgOHhd_glloTtR7YHd6u43OM 6x'
      )
    })

    it('returns srcset with fixed height and undefined dpr', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, dpr: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&signature=OPRYWD06ACeu6W8YXkZ87-swVGCl9hCk7bPLh_wn6Cw 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&signature=4981fsA13f03qY95Xt9grU2ZyjVReTukEEGmEMaOyeU 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&signature=NYcE4xjRvJ3m8FCTwVbC30VNjuKuCJzY-pBwqMXvdLc 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4&signature=CosxSgq_XuY_XDYCDGZzMp0XHgQ45HWTTUNsfIWqAaI 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5&signature=jNdvuKhq8n1ptnvALUZ7pttVj--8wctjeDEHKlPPxtY 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6&signature=5b-Ojy9lICTxN3EoHsBWgOHhd_glloTtR7YHd6u43OM 6x'
      )
    })

    it('returns srcset with fixed height and range of dprs', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, dpr: range(1, 4) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&signature=OPRYWD06ACeu6W8YXkZ87-swVGCl9hCk7bPLh_wn6Cw 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&signature=4981fsA13f03qY95Xt9grU2ZyjVReTukEEGmEMaOyeU 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&signature=NYcE4xjRvJ3m8FCTwVbC30VNjuKuCJzY-pBwqMXvdLc 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4&signature=CosxSgq_XuY_XDYCDGZzMp0XHgQ45HWTTUNsfIWqAaI 4x'
      )
    })

    it('returns srcset with fixed height and empty array of dprs', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, dpr: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&signature=OPRYWD06ACeu6W8YXkZ87-swVGCl9hCk7bPLh_wn6Cw 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&signature=4981fsA13f03qY95Xt9grU2ZyjVReTukEEGmEMaOyeU 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&signature=NYcE4xjRvJ3m8FCTwVbC30VNjuKuCJzY-pBwqMXvdLc 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4&signature=CosxSgq_XuY_XDYCDGZzMp0XHgQ45HWTTUNsfIWqAaI 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=5&signature=jNdvuKhq8n1ptnvALUZ7pttVj--8wctjeDEHKlPPxtY 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=6&signature=5b-Ojy9lICTxN3EoHsBWgOHhd_glloTtR7YHd6u43OM 6x'
      )
    })

    it('returns srcset with fixed height and array of dprs of size 1', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, dpr: [1] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&signature=OPRYWD06ACeu6W8YXkZ87-swVGCl9hCk7bPLh_wn6Cw 1x')
    })

    it('returns srcset with fixed height and array of dprs', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, dpr: [1, 2, 3] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&signature=OPRYWD06ACeu6W8YXkZ87-swVGCl9hCk7bPLh_wn6Cw 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&signature=4981fsA13f03qY95Xt9grU2ZyjVReTukEEGmEMaOyeU 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&signature=NYcE4xjRvJ3m8FCTwVbC30VNjuKuCJzY-pBwqMXvdLc 3x'
      )
    })

    it('returns srcset with fixed height and fixed quality', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1&signature=gipsMEavWgTV3KTwyahYXj4f4KtIBXnfGl-Sf4K1AoU 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=2&signature=ILRBpAF4yyc3_lWihJwlvkid-6VZfHxNgZWhvh6Lhvs 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=3&signature=UXsqudgHsgSqDGAqC448V4vTRB_XL__FChpT19qhXNU 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=4&signature=Szk6Qc7wRuvv7hAQX3GrF-PGA7w7IFOFXnWG3lZRcd0 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=5&signature=W4QivDeu6jJOXWmIWihX24w3VPokgqUqQUSpCWMudVI 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=6&signature=NikOouFxX1NDIyqejGzzG8EpHKTeakKR3McjdQTNUxo 6x'
      )
    })

    it('returns srcset with fixed height and null quality', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, quality: null })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=1&signature=QCoyLuiBDl0ytX1cTW167ByM5jWzJg3ZibYPtN2g44I 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2&signature=KcIeRbexUWeBMCYVRfq8SC-lwl9JMSWFeQ7hgysQUqI 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3&signature=YXH8ZTUFX4YXOMStgoae85f82QivRXy_HB25C3NabjY 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4&signature=twl_a0CLY3-f3mPMAxeLDuIF9KGwTLoGQOE54FcJVC8 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5&signature=xgo3Obp4ju4-icy-U7wf6BKdhXHUlJyfXUPtHgODPhs 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6&signature=J4DCGr3c180ftlc1YQi4f5tHPC4j9hit5HIteJefXZM 6x'
      )
    })

    it('returns srcset with fixed height and undefined quality', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, quality: undefined })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=1&signature=QCoyLuiBDl0ytX1cTW167ByM5jWzJg3ZibYPtN2g44I 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2&signature=KcIeRbexUWeBMCYVRfq8SC-lwl9JMSWFeQ7hgysQUqI 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3&signature=YXH8ZTUFX4YXOMStgoae85f82QivRXy_HB25C3NabjY 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4&signature=twl_a0CLY3-f3mPMAxeLDuIF9KGwTLoGQOE54FcJVC8 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5&signature=xgo3Obp4ju4-icy-U7wf6BKdhXHUlJyfXUPtHgODPhs 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6&signature=J4DCGr3c180ftlc1YQi4f5tHPC4j9hit5HIteJefXZM 6x'
      )
    })

    it('returns srcset with fixed height and range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1&signature=gipsMEavWgTV3KTwyahYXj4f4KtIBXnfGl-Sf4K1AoU 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=66&dpr=2&signature=aMY4Y3IoWsnGAp9nraijGlfvngHN8xvfbGavO8KHhW0 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=58&dpr=3&signature=OlTH_pLosHDjkTQ3FqPY4ZwzXY0pF8IIeoGdd_4CXjM 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=51&dpr=4&signature=FOBkytNoJVhy2x4DxHlw94bUY9pyxC6D1okODEVbznc 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=45&dpr=5&signature=ZwpZsCH8Bbt9BpkV0KKOiBeETd3_gfFy4RVlz-3lIv4 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=40&dpr=6&signature=IjuHRWBbL3VBz5mahP-RxbFeTI_IzHoNnefOzUHZIdc 6x'
      )
    })

    it('returns srcset with fixed height and empty array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=1&signature=QCoyLuiBDl0ytX1cTW167ByM5jWzJg3ZibYPtN2g44I 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2&signature=KcIeRbexUWeBMCYVRfq8SC-lwl9JMSWFeQ7hgysQUqI 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3&signature=YXH8ZTUFX4YXOMStgoae85f82QivRXy_HB25C3NabjY 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4&signature=twl_a0CLY3-f3mPMAxeLDuIF9KGwTLoGQOE54FcJVC8 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5&signature=xgo3Obp4ju4-icy-U7wf6BKdhXHUlJyfXUPtHgODPhs 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6&signature=J4DCGr3c180ftlc1YQi4f5tHPC4j9hit5HIteJefXZM 6x'
      )
    })

    it('returns srcset with fixed height and array of qualities of size 1', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1&signature=gipsMEavWgTV3KTwyahYXj4f4KtIBXnfGl-Sf4K1AoU 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=2&signature=KcIeRbexUWeBMCYVRfq8SC-lwl9JMSWFeQ7hgysQUqI 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=3&signature=YXH8ZTUFX4YXOMStgoae85f82QivRXy_HB25C3NabjY 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4&signature=twl_a0CLY3-f3mPMAxeLDuIF9KGwTLoGQOE54FcJVC8 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5&signature=xgo3Obp4ju4-icy-U7wf6BKdhXHUlJyfXUPtHgODPhs 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6&signature=J4DCGr3c180ftlc1YQi4f5tHPC4j9hit5HIteJefXZM 6x'
      )
    })

    it('returns srcset with fixed height and array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=75&dpr=1&signature=gipsMEavWgTV3KTwyahYXj4f4KtIBXnfGl-Sf4K1AoU 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=70&dpr=2&signature=FacmhyVpHbzVJtjokktiI2hdXHgSYHgMdsiwIlSeIp0 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=65&dpr=3&signature=s64KtZO2Lkb11qMiynGMJo7Q145JbKIxN1GFr87WExg 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=4&signature=twl_a0CLY3-f3mPMAxeLDuIF9KGwTLoGQOE54FcJVC8 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=5&signature=xgo3Obp4ju4-icy-U7wf6BKdhXHUlJyfXUPtHgODPhs 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&quality=&dpr=6&signature=J4DCGr3c180ftlc1YQi4f5tHPC4j9hit5HIteJefXZM 6x'
      )
    })

    it('returns srcset with fixed height, range of dprs and range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, dpr: range(1, 4), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&quality=75&signature=25rT2PoNIjb3dNUktp6uKyiL5TaPtKzAvBikvflXeuU 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&quality=61&signature=yIawysfrGLbT4SBOK-WUd_PGPhQMiUT32tKoLKtWTs0 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&quality=49&signature=LBnzxpLpiuN0-Q19nRIiwY5kh6sn-KOnMQKGfROhpJo 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=4&quality=40&signature=Vh9_hy6G8r7QULCF7wGWjWc062SwqaQKQuvE0UYZQBk 4x'
      )
    })

    it('returns srcset with fixed height, array of dprs and array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: 200, dpr: [1, 2, 3], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=1&quality=75&signature=25rT2PoNIjb3dNUktp6uKyiL5TaPtKzAvBikvflXeuU 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=2&quality=70&signature=UloDZHD2ckqJSMcnXYHPHBIazvlBO13xXO81tUlOfFE 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?height=200&dpr=3&quality=65&signature=MJT1FBPv626BJwh2rdVRwliLRN1vPLrxibPcIkOaLg4 3x'
      )
    })

    it('returns srcset with fixed width and fixed height', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&signature=IJM9kyvoH30hC2Xr0-FG9CZxYvDSy9MsZJBbs6Wm2kg 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&signature=mSGPEv1SiYAFUO72DNUfMDdL4izJLHlwu1aiRGsonY4 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&signature=_M2FTPPtfAUaqOaRZXIOK-nHjJ3RbejVRz7jt5Bggw8 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4&signature=jiT6foPkzDPgIfhnhh668OwFFKOb1etLBGKqdgQPzpk 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=5&signature=pDmFhsCoX1YIB2QUKSTZuy0qpfiL67yLNKaZW0L7HSs 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=6&signature=kvgSWBz889aNkuaNJV1BjMTj8fdAcy_kjJo0q-r9QgY 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and fixed dpr', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: 2 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&signature=IJM9kyvoH30hC2Xr0-FG9CZxYvDSy9MsZJBbs6Wm2kg 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&signature=mSGPEv1SiYAFUO72DNUfMDdL4izJLHlwu1aiRGsonY4 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&signature=_M2FTPPtfAUaqOaRZXIOK-nHjJ3RbejVRz7jt5Bggw8 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4&signature=jiT6foPkzDPgIfhnhh668OwFFKOb1etLBGKqdgQPzpk 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=5&signature=pDmFhsCoX1YIB2QUKSTZuy0qpfiL67yLNKaZW0L7HSs 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=6&signature=kvgSWBz889aNkuaNJV1BjMTj8fdAcy_kjJo0q-r9QgY 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and range of dprs', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: range(1, 4) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&signature=IJM9kyvoH30hC2Xr0-FG9CZxYvDSy9MsZJBbs6Wm2kg 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&signature=mSGPEv1SiYAFUO72DNUfMDdL4izJLHlwu1aiRGsonY4 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&signature=_M2FTPPtfAUaqOaRZXIOK-nHjJ3RbejVRz7jt5Bggw8 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4&signature=jiT6foPkzDPgIfhnhh668OwFFKOb1etLBGKqdgQPzpk 4x'
      )
    })

    it('returns srcset with fixed width, fixed height and empty array of dprs', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&signature=IJM9kyvoH30hC2Xr0-FG9CZxYvDSy9MsZJBbs6Wm2kg 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&signature=mSGPEv1SiYAFUO72DNUfMDdL4izJLHlwu1aiRGsonY4 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&signature=_M2FTPPtfAUaqOaRZXIOK-nHjJ3RbejVRz7jt5Bggw8 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4&signature=jiT6foPkzDPgIfhnhh668OwFFKOb1etLBGKqdgQPzpk 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=5&signature=pDmFhsCoX1YIB2QUKSTZuy0qpfiL67yLNKaZW0L7HSs 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=6&signature=kvgSWBz889aNkuaNJV1BjMTj8fdAcy_kjJo0q-r9QgY 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and array of dprs of size 1', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: [1] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&signature=IJM9kyvoH30hC2Xr0-FG9CZxYvDSy9MsZJBbs6Wm2kg 1x')
    })

    it('returns srcset with fixed width, fixed height and array of dprs', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: [1, 2, 3] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&signature=IJM9kyvoH30hC2Xr0-FG9CZxYvDSy9MsZJBbs6Wm2kg 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&signature=mSGPEv1SiYAFUO72DNUfMDdL4izJLHlwu1aiRGsonY4 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&signature=_M2FTPPtfAUaqOaRZXIOK-nHjJ3RbejVRz7jt5Bggw8 3x'
      )
    })

    it('returns srcset with fixed width, fixed height and fixed quality', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, quality: 75 })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1&signature=PnadVjkFBE6kQMGUBuV-IVtHSoL8bmVEDXjvByjA4xg 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=2&signature=5J3U-Gf37ruvbgNOSK8xKHggHOjGEB4EvlcXr2KUeP0 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=3&signature=7Prpr-BMsQeW_a7DoFhqXxi_1pKIu3xQaN_RzeBLbqM 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=4&signature=ptth3HdLo4xxV76BumAgl7n9kJIML7PNupQ_Ko35GQU 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=5&signature=YatBW63wHTllgGrZK8MqhQ_Jl66kBCoAWAULeew39vk 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=6&signature=wIezHaEl9OYPh5PdOVMH3it_nE2n9lg7Nhe6BPhsrnY 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1&signature=PnadVjkFBE6kQMGUBuV-IVtHSoL8bmVEDXjvByjA4xg 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=66&dpr=2&signature=IWp9uUgUbhWZghziCC5N7Lct6Vp6ccRGVPvrRdm2WGE 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=58&dpr=3&signature=3WlYuqk7aJL7sWuMarFU1dYB9jiFVZRrMFsuzzJNPJ8 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=51&dpr=4&signature=lsQdhnA-9Zv6M0Wvy7zeu3QdC763e2In3Xq14RbQgwI 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=45&dpr=5&signature=ctuQrnocmmcQ597Tb4gxaNciH-pi5ZBfYzvNOSy6kNQ 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=40&dpr=6&signature=Zg0a1OhZeHCzhhzzzm_1MXqkOqMnREf_4DukDTZD8os 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and empty array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=1&signature=I33EBra07-ZnKfQnF3q_qWcrZgrVjmyLaKGtYnUPt1A 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=2&signature=TutthSvWJtm9jcWHiMVgmnpJSYd9-9qrRmrJSpXp61w 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=3&signature=qS0bMn8ZmZ_c_uzAqz24U_e4e76z_VSDGZUS2RwxY-s 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=4&signature=3tXfxmhvuVtfu5EVaama5ECwXCX3U9xG0DFJaCi6FbQ 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=5&signature=RWLeQdABIup6zLvmubBZ_MHnnw70SVLwAUhDDQkMFZ0 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=6&signature=5glXeaOZCVkKfFPYt6yjOFuKmKKPSmC9CRxkR8rYjFc 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and array of qualities of size 1', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1&signature=PnadVjkFBE6kQMGUBuV-IVtHSoL8bmVEDXjvByjA4xg 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=2&signature=TutthSvWJtm9jcWHiMVgmnpJSYd9-9qrRmrJSpXp61w 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=3&signature=qS0bMn8ZmZ_c_uzAqz24U_e4e76z_VSDGZUS2RwxY-s 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=4&signature=3tXfxmhvuVtfu5EVaama5ECwXCX3U9xG0DFJaCi6FbQ 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=5&signature=RWLeQdABIup6zLvmubBZ_MHnnw70SVLwAUhDDQkMFZ0 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=6&signature=5glXeaOZCVkKfFPYt6yjOFuKmKKPSmC9CRxkR8rYjFc 6x'
      )
    })

    it('returns srcset with fixed width, fixed height and array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&dpr=1&signature=PnadVjkFBE6kQMGUBuV-IVtHSoL8bmVEDXjvByjA4xg 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=70&dpr=2&signature=C-thQx7QmatepDvZuYtIPUmwGeMsDh347APm_qJpFFE 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=65&dpr=3&signature=z2J1hziiBKJ4NFyXNtQDpKqkFtoaTcUMxOGJcPSQ5Is 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=4&signature=3tXfxmhvuVtfu5EVaama5ECwXCX3U9xG0DFJaCi6FbQ 4x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=5&signature=RWLeQdABIup6zLvmubBZ_MHnnw70SVLwAUhDDQkMFZ0 5x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=&dpr=6&signature=5glXeaOZCVkKfFPYt6yjOFuKmKKPSmC9CRxkR8rYjFc 6x'
      )
    })

    it('returns srcset with fixed width, fixed height, range of dprs and range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: range(1, 4), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&quality=75&signature=t6k4Dapq2m5a-DpuUsQw47tl02aBX9XCNQJ8NChYpLE 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&quality=61&signature=kHXoQWMZigQ3ck3lq5PE2oPB_-CgJvu0Siw0qZUCPqQ 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&quality=49&signature=uMu3kinh0aZWyJympL5MkyNblm3z5cqc4o3p5nvu5kk 3x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=4&quality=40&signature=EwcIR2na2b6Io4jqL-yoA4UIVmIiv6YlxiDREMfHNQI 4x'
      )
    })

    it('returns srcset with fixed width, fixed height, array of dprs and array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 200, height: 300, dpr: [1, 2, 3], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=1&quality=75&signature=t6k4Dapq2m5a-DpuUsQw47tl02aBX9XCNQJ8NChYpLE 1x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=2&quality=70&signature=3cwCowdly2-A-bzVeygxuyspjL3FTvPYLleWxeyAeVI 2x,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&dpr=3&quality=65&signature=S2mYF1jlamW-ESRjeeasYvcPRNAvjetbatj0WPv2I0k 3x'
      )
    })

    it('returns srcset with range of widths', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: range(100, 4096) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&signature=-G7slD-ae7GdT1lx8I0-7iUMnkMTU3NcTGB8GzaiaNg 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=128&signature=2cC_ykc-pqoIK_NQOTjarDcJIgZD5mPu_AnK2cvCW3c 128w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=164&signature=25acIxwSYj7b6Xt-hAq0QTsGLt9fYfZWvGdwFbktRlI 164w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210&signature=FhItrI5gSCF4MhngaaXcbmKYJXnC1S_NQG8UNaI5Sp0 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=269&signature=N151yMSgG6nke2hcBKRekHLXzaEWMdH80vgqXGhDhYQ 269w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=345&signature=g-xGt_iGA-wC3P8iui5l0kv_OF6CF5U0PcUb9F1gQ4w 345w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442&signature=CXrismkxq7CuoNFF_BFURwtZyWyFGO-mf8lDyLbj4SM 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=566&signature=_AHoRlDZVA-iuK85k4SkSycBWLi19ixUqZU4O_kvExk 566w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=724&signature=YX7T2AvjD8bdrqCumvILMX_QRoD2Z4fEKQm5alPuHqo 724w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928&signature=A2ihMdOHDl2hGG6MdocDKTMg6WNIjleM6BtbNCcr44A 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1188&signature=XmUJuVHFLItcXFN8X6I7p4fvBQH_JCarPBz32vjrcu0 1188w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1522&signature=npRnE8jsSy1oAvxAA8TVsvqk1jG00tO_NJWFYyS-YXs 1522w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949&signature=4hi_0-BD3AwuUUONQAmieWJEsTAOFxrX1TLXKeHCLqE 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2497&signature=7SxlJMpbxkA54ceWURFwnyIv8dynrW7Hx3OkauT8zcM 2497w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3198&signature=Z-TSGIBt9U0OCLKKKbw2dMKefPj6LQeToy-9Sz6xzT8 3198w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096&signature=TWdvbo0ucyOxAMxH8OI_T3WK7Ufbwwl40pWtPq7Ff78 4096w'
      )
    })

    it('returns srcset with range of widths and range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: range(100, 4096), quality: range(70, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&quality=70&signature=jWu-9brjqLkPD_CK4SX9_yckyaQ8d8vf7oWzszbuW-0 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=128&quality=67&signature=yfCWjWUJKlzBxOqF5dJI0Ej0jzhIQZ9ttus_n4OTkoM 128w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=164&quality=65&signature=LqSqBqxAKS1QJ2W73nj7Oub9P0DMTA9KiGxY76o_ROk 164w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210&quality=63&signature=AR2sBFCQej47qzamZvmh2o7L_UFsiD0NT9iooOlqb2M 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=269&quality=60&signature=a7er0FLZIMVT-ZrGwCYnXAxoanHhH97kurkXaQDTjBU 269w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=345&quality=58&signature=tyC1UtP1dzYtBbfWXqVA8xFSXG3dbv4EJad_YAOcZiQ 345w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442&quality=56&signature=usF3QE7FGA6v8Gg-Qu3ExHOWdg3NxsFgdjiYSHPH8KI 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=566&quality=54&signature=5dQ7teZBhv0ytZZaURZbfAoY7y6mtXZA-zy_jUxOJdw 566w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=724&quality=52&signature=bdWpkErDsqG9yFFHzVtVJMpRkgS3UZFIxRWsHY1zo1g 724w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928&quality=50&signature=glEum5UD25WemwFC-zHHkfggPWme6cWTigF7zkdf930 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1188&quality=48&signature=ttlEa2gosU-ZgI3zvofvZaY5dHudpZ9j7POJB_Xy5TQ 1188w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1522&quality=46&signature=azycXOjL-l_KmHrVKUAbfwVFTns0xGFUGWxm2MrDHZ8 1522w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949&quality=45&signature=lkh8M7JSklT26KTAaybQcZ3rz2Woc9OF4JjlI6eZk7M 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2497&quality=43&signature=-lU_Y-yW-PCTKOa63d_zEw9oUunOHpHi_1EVvU7QEhI 2497w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3198&quality=42&signature=lYwxJOqDpjIrxFjZTTgJTcygSU5im7hvXKAZSAt2PPg 3198w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096&quality=40&signature=2LpbFIpgUEeYFhyHaybrKWjub49WHuighWvesmRj4dk 4096w'
      )
    })

    it('returns srcset with sequence of widths', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: sequence(100, 4096, 6) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&signature=-G7slD-ae7GdT1lx8I0-7iUMnkMTU3NcTGB8GzaiaNg 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210&signature=FhItrI5gSCF4MhngaaXcbmKYJXnC1S_NQG8UNaI5Sp0 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442&signature=CXrismkxq7CuoNFF_BFURwtZyWyFGO-mf8lDyLbj4SM 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928&signature=A2ihMdOHDl2hGG6MdocDKTMg6WNIjleM6BtbNCcr44A 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949&signature=4hi_0-BD3AwuUUONQAmieWJEsTAOFxrX1TLXKeHCLqE 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096&signature=TWdvbo0ucyOxAMxH8OI_T3WK7Ufbwwl40pWtPq7Ff78 4096w'
      )
    })

    it('returns srcset with sequence of widths and range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: sequence(100, 4096, 6), quality: range(70, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&quality=70&signature=jWu-9brjqLkPD_CK4SX9_yckyaQ8d8vf7oWzszbuW-0 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=210&quality=63&signature=AR2sBFCQej47qzamZvmh2o7L_UFsiD0NT9iooOlqb2M 210w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=442&quality=56&signature=usF3QE7FGA6v8Gg-Qu3ExHOWdg3NxsFgdjiYSHPH8KI 442w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=928&quality=50&signature=glEum5UD25WemwFC-zHHkfggPWme6cWTigF7zkdf930 928w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1949&quality=45&signature=lkh8M7JSklT26KTAaybQcZ3rz2Woc9OF4JjlI6eZk7M 1949w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4096&quality=40&signature=2LpbFIpgUEeYFhyHaybrKWjub49WHuighWvesmRj4dk 4096w'
      )
    })

    it('returns srcset with empty array of widths', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=100&signature=-G7slD-ae7GdT1lx8I0-7iUMnkMTU3NcTGB8GzaiaNg 100w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=134&signature=fHLmra9mxfjnp8E-7Cj7AZlJ43kRKLILUQ3Gawa0pxA 134w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=180&signature=omMuwPcMxKVGGnDk9sR2G6qD28uLIAldc-N9FvhwSH0 180w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=241&signature=09nboU72WGyryf9zyxMsNyBNu4PUrrGkuDlbM6shYas 241w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=324&signature=KOLqtvfSwSLUKnWY5-tvuaj-pOsBcN_WIHRTNLpJ7-Y 324w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=434&signature=48LOvc3n4CqstYfikmhT57XvKnydLRUa6qT-_IqZ0io 434w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=583&signature=IfEEELQp0__u7Ip-qzKQ2Plw70ybDOdrVeOz5jw9BOY 583w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=781&signature=p6sa4yVVce8AkuJagwLolgRD1nQUyzZsMw68KSQaVwM 781w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1048&signature=qz5KgcQRJHnCcubs9ldfGUGm1vzsvjBge17OWhykwp0 1048w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1406&signature=Kh16qduc4dixmTKuhASbspncSVHlDTd4DnsbcmfB6Mw 1406w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=1886&signature=WN-YBqlX-bhiWxFydOVBsfkVIWjIuz09qvHkA2UZWvs 1886w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=2530&signature=wH5aHb7P0S6xuJvBDoPgZPIo2-nosgViwt2ADVGhAvw 2530w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=3394&signature=e_fi5Y-uruuUWips4wxJt5WkHKETn9P1MmHXVD9Cvxs 3394w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=4553&signature=AuXvD4c7FN279MOC63ogznGAqYmHqLCVDgQvl0I1IKM 4553w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=6107&signature=nWDdC0v7d695Oo_bdhgc_AkxCkIyF7FSZgj7bAcOkNo 6107w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=8192&signature=HNmtIa6jhuc8o3Yir2zZBjDvgiiAwGeMzM-x7ow1dSE 8192w'
      )
    })

    it('returns srcset with array of widths of size 1', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200] })

      expect(srcset).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&signature=oV-jpcwoz0-UdXsZCVCecPwJ3tb88vfb1lwM2nKfq60 200w')
    })

    it('returns srcset with array of widths', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&signature=oV-jpcwoz0-UdXsZCVCecPwJ3tb88vfb1lwM2nKfq60 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&signature=BEQUozs795ZFLKcwTBrTrY3Ga0l8WeZE0cjVo_JjgwU 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&signature=eboiZiD6J2-wWKqi3aZLUiu2YQZTDeY1vxcfqmtsQhw 400w'
      )
    })

    it('returns srcset with array of widths and range of heights', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400], height: range(300, 500) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&signature=5LR9YGho_DVBmGZ_aR5NpG-051zJG23u-LNJe3-nEwU 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=387&signature=19698XtncA9IDVyo5d60-c3HPPRDOM3nxSYbGh8sCKY 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500&signature=nB5xubhzQyvrGIU1e2JtoaS5KJC76qiHwTYwTtNHzE0 400w'
      )
    })

    it('returns srcset with array of widths and empty array of heights', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400], height: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=&signature=voipBs7wOgfiKHFeBqPi4zkBCwi_o4fNyy2eHur9Yr0 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=&signature=qtZUoqn9irWsq-35NKO1VAxqk4YaC961LroJOa8VgrA 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=&signature=LMYoRf_j_cYye718DX_kur72ZLpwlhzS1PB0ki7Bb18 400w'
      )
    })

    it('returns srcset with array of widths and array of heights of size 1', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400], height: [300] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&signature=5LR9YGho_DVBmGZ_aR5NpG-051zJG23u-LNJe3-nEwU 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=&signature=qtZUoqn9irWsq-35NKO1VAxqk4YaC961LroJOa8VgrA 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=&signature=LMYoRf_j_cYye718DX_kur72ZLpwlhzS1PB0ki7Bb18 400w'
      )
    })

    it('returns srcset with array of widths and array of heights', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400], height: [300, 400, 500] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&signature=5LR9YGho_DVBmGZ_aR5NpG-051zJG23u-LNJe3-nEwU 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=400&signature=6fgNZ57ztEH-0R6V_V8HpQnJDLs9FmmWujzZ-qz0Nl0 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500&signature=nB5xubhzQyvrGIU1e2JtoaS5KJC76qiHwTYwTtNHzE0 400w'
      )
    })

    it('returns srcset with array of widths and range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400], quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&signature=VxBn4eboQoUAC6C9kAoxTU88_pl8JsXIb9vna7IPEoU 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality=55&signature=HTal7YeJU25OqZhnEXpJmutEJL64XjZ50QIXBlcoS9w 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality=40&signature=YFxQwbC4YCEJ3tPLh5W1VsMjPa0NYNl9E-V-J2OmR2I 400w'
      )
    })

    it('returns srcset with array of widths and empty array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400], quality: [] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=&signature=JsmWwDAytj5PL79rbgPMxsyZKpiShrlabxnZ6PYytW4 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality=&signature=o3FvvPVmG52OlZucA6qrG3ponTY3AksB8oaQU83XxLk 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality=&signature=v3Idf3iopkK41AjHZb1oBXcjmf0wgjcdrr3Bpw1bkJ0 400w'
      )
    })

    it('returns srcset with array of widths and array of qualities of size 1', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400], quality: [75] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&signature=VxBn4eboQoUAC6C9kAoxTU88_pl8JsXIb9vna7IPEoU 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality=&signature=o3FvvPVmG52OlZucA6qrG3ponTY3AksB8oaQU83XxLk 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality=&signature=v3Idf3iopkK41AjHZb1oBXcjmf0wgjcdrr3Bpw1bkJ0 400w'
      )
    })

    it('returns srcset with array of widths and array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&quality=75&signature=VxBn4eboQoUAC6C9kAoxTU88_pl8JsXIb9vna7IPEoU 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&quality=70&signature=_Ec1jIoy0coaBnbqa3h5Uhsm3wWhJEJUszV_7swM-gA 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&quality=65&signature=n6ib7RsWbTSQvN5F5Rzy1wB9wexKx31IS-Omdg__RqY 400w'
      )
    })

    it('returns srcset with array of widths, range of heights and range of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400], height: range(300, 500), quality: range(75, 40) })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&signature=avflohh59fJI6eHUXL232Xb-wNXiraj5uxYPTFMCnNs 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=387&quality=55&signature=pvros3H2YqyZC8ae52VisbXo3OhsN4HVt90ElngutHs 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500&quality=40&signature=_6g3LZxEZIcathWXeSaoIWISgz7kkUPmnP98RLp0qEM 400w'
      )
    })

    it('returns srcset with array of widths, array of heights and array of qualities', () => {
      const srcset = Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [200, 300, 400], height: [300, 400, 500], quality: [75, 70, 65] })

      expect(srcset).toBe(
        'https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&quality=75&signature=avflohh59fJI6eHUXL232Xb-wNXiraj5uxYPTFMCnNs 200w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=300&height=400&quality=70&signature=LOLbD83Cxw8nsn4jkHu33AOJEbhB3y3EWlDTUbf3g6A 300w,\n' +
        'https://assets.imglab-cdn.net/example.jpeg?width=400&height=500&quality=65&signature=KBMGUlSlyzUy4blPYnPh54Uu75v1lPyi4lSS_2hrkRE 400w'
      )
    })

    it('throws a new error when width is fluid and dpr is also fluid', () => {
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: range(100, 300), dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: range(100, 300), dpr: [1, 2, 3] }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [100, 200, 300], dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: [100, 200, 300], dpr: [1, 2, 3] }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: sequence(100, 300), dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: sequence(100, 300), dpr: [1, 2, 3] }) }).toThrow(Error)
    })

    it('throws a new error when width is not fluid and height is fluid', () => {
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: range(100, 300) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { height: [100, 200, 300] }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 100, height: range(100, 300) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { width: 100, height: [100, 200, 300] }) }).toThrow(Error)
    })

    it('throws a new error when width and height are not specified and dpr is fluid', () => {
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { dpr: range(1, 3) }) }).toThrow(Error)
      expect(() => { Srcset.srcset(SECURE_SOURCE, 'example.jpeg', { dpr: [1, 2, 3] }) }).toThrow(Error)
    })
  })
})
