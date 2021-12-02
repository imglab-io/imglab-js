import Utils from '../src/utils'

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
      expect(Utils.normalizeParams({ trim: 'color', 'trim-color': 'orange' })).toEqual({ trim: 'color', 'trim-color': 'orange' })
      expect(Utils.normalizeParams({ trim: 'color', trim_color: 'orange' })).toEqual({ trim: 'color', 'trim-color': 'orange' })
      expect(Utils.normalizeParams({ trim: 'color', trimColor: 'orange' })).toEqual({ trim: 'color', 'trim-color': 'orange' })
    })
  })
})
