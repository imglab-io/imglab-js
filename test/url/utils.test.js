import Utils from '../../src/url/utils'

describe('Utils', () => {
  describe('normalizePath', () => {
    it('returns normalized path', () => {
      expect(Utils.normalizePath('')).toBe('')
      expect(Utils.normalizePath('example.jpeg')).toBe('example.jpeg')
      expect(Utils.normalizePath('/example.jpeg')).toBe('example.jpeg')
      expect(Utils.normalizePath('//example.jpeg')).toBe('example.jpeg')
      expect(Utils.normalizePath('example.jpeg/')).toBe('example.jpeg')
      expect(Utils.normalizePath('example.jpeg//')).toBe('example.jpeg')
      expect(Utils.normalizePath('/example.jpeg/')).toBe('example.jpeg')
      expect(Utils.normalizePath('//example.jpeg//')).toBe('example.jpeg')
      expect(Utils.normalizePath('subfolder/example.jpeg')).toBe('subfolder/example.jpeg')
      expect(Utils.normalizePath('/subfolder/example.jpeg')).toBe('subfolder/example.jpeg')
      expect(Utils.normalizePath('//subfolder/example.jpeg')).toBe('subfolder/example.jpeg')
      expect(Utils.normalizePath('subfolder/example.jpeg/')).toBe('subfolder/example.jpeg')
      expect(Utils.normalizePath('subfolder/example.jpeg//')).toBe('subfolder/example.jpeg')
      expect(Utils.normalizePath('/subfolder/example.jpeg/')).toBe('subfolder/example.jpeg')
      expect(Utils.normalizePath('//subfolder/example.jpeg//')).toBe('subfolder/example.jpeg')
    })
  })

  describe('normalizeParams', () => {
    it('returns normalized params', () => {
      expect(Utils.normalizeParams({})).toEqual({})
      expect(Utils.normalizeParams({ width: 200, height: 300})).toEqual({ width: 200, height: 300})
      expect(Utils.normalizeParams({ width: 200, height: 300, download: null })).toEqual({ width: 200, height: 300, download: '' })
      expect(Utils.normalizeParams({ width: 200, height: 300, download: undefined })).toEqual({ width: 200, height: 300, download: '' })
      expect(Utils.normalizeParams({ trim: 'color', 'trim-color': 'orange' })).toEqual({ trim: 'color', 'trim-color': 'orange' })
      expect(Utils.normalizeParams({ trim: 'color', trim_color: 'orange' })).toEqual({ trim: 'color', 'trim-color': 'orange' })
      expect(Utils.normalizeParams({ trim: 'color', trimColor: 'orange' })).toEqual({ trim: 'color', 'trim-color': 'orange' })
      expect(Utils.normalizeParams({ width: 200, expires: 1464096368 })).toEqual({ width: 200, expires: 1464096368 })
      expect(Utils.normalizeParams({ width: 200, expires: '1464096368' })).toEqual({ width: 200, expires: '1464096368' })
      expect(Utils.normalizeParams({ width: 200, expires: new Date(1464096368 * 1000)})).toEqual({ width: 200, expires: 1464096368 })
    })
  })

  describe('isWebURL', () => {
    it('returns boolean value indicating whether string is a valid HTTP/HTTPS URL or not', () => {
      expect(Utils.isWebURL('https://assets.com/example.jpeg')).toBe(true)
      expect(Utils.isWebURL('http://assets.com/example.jpeg')).toBe(true)
      expect(Utils.isWebURL('HTTPS://assets.com/example.jpeg')).toBe(true)
      expect(Utils.isWebURL('HTTP://assets.com/example.jpeg')).toBe(true)

      expect(Utils.isWebURL('')).toBe(false)
      expect(Utils.isWebURL('example.jpeg')).toBe(false)
      expect(Utils.isWebURL('https/example.jpeg')).toBe(false)
      expect(Utils.isWebURL('http/example.jpeg')).toBe(false)
      expect(Utils.isWebURL('/https/example.jpeg')).toBe(false)
      expect(Utils.isWebURL('/example.jpeg')).toBe(false)
      expect(Utils.isWebURL('/http/example.jpeg')).toBe(false)
    })
  })
})
