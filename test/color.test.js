import Color from '../src/color'

describe('Color', () => {
  describe('color', () => {
    it('returns rgb color as string', () => {
      expect(Color.color(255, 0, 0)).toBe('255,0,0')
      expect(Color.color(0, 255, 0)).toBe('0,255,0')
      expect(Color.color(0, 0, 255)).toBe('0,0,255')

      expect(Color.color(0, 255, 255)).toBe('0,255,255')
      expect(Color.color(255, 0, 255)).toBe('255,0,255')
      expect(Color.color(255, 255, 0)).toBe('255,255,0')

      expect(Color.color(0, 0, 0)).toBe('0,0,0')
      expect(Color.color(255, 255, 255)).toBe('255,255,255')
      expect(Color.color(1, 2, 3)).toBe('1,2,3')
    })

    it('returns rgba color as string', () => {
      expect(Color.color(255, 0, 0, 0)).toBe('255,0,0,0')
      expect(Color.color(0, 255, 0, 0)).toBe('0,255,0,0')
      expect(Color.color(0, 0, 255, 0)).toBe('0,0,255,0')
      expect(Color.color(0, 0, 0, 255)).toBe('0,0,0,255')

      expect(Color.color(0, 255, 255, 255)).toBe('0,255,255,255')
      expect(Color.color(255, 0, 255, 255)).toBe('255,0,255,255')
      expect(Color.color(255, 255, 0, 255)).toBe('255,255,0,255')
      expect(Color.color(255, 255, 255, 0)).toBe('255,255,255,0')

      expect(Color.color(0, 0, 0, 0)).toBe('0,0,0,0')
      expect(Color.color(255, 255, 255, 255)).toBe('255,255,255,255')
      expect(Color.color(1, 2, 3, 4)).toBe('1,2,3,4')
    })

    it('returns named color as string', () => {
      expect(Color.color('blue')).toBe('blue')
      expect(Color.color('black')).toBe('black')
      expect(Color.color('white')).toBe('white')
    })

    it('throws an error when the rgb color is invalid', () => {
      expect(() => { Color.color(-1, 255, 255) }).toThrow(Error)
      expect(() => { Color.color(255, -1, 255) }).toThrow(Error)
      expect(() => { Color.color(255, 255, -1) }).toThrow(Error)

      expect(() => { Color.color(256, 255, 255) }).toThrow(Error)
      expect(() => { Color.color(255, 256, 255) }).toThrow(Error)
      expect(() => { Color.color(255, 255, 256) }).toThrow(Error)

      expect(() => { Color.color('255', 255, 255) }).toThrow(Error)
      expect(() => { Color.color(255, '255', 255) }).toThrow(Error)
      expect(() => { Color.color(255, 255, '255') }).toThrow(Error)
    })

    it('throws an error when the rgba color is invalid', () => {
      expect(() => { Color.color(-1, 255, 255, 255) }).toThrow(Error)
      expect(() => { Color.color(255, -1, 255, 255) }).toThrow(Error)
      expect(() => { Color.color(255, 255, -1, 255) }).toThrow(Error)
      expect(() => { Color.color(255, 255, 255, -1) }).toThrow(Error)

      expect(() => { Color.color(256, 255, 255, 255) }).toThrow(Error)
      expect(() => { Color.color(255, 256, 255, 255) }).toThrow(Error)
      expect(() => { Color.color(255, 255, 256, 255) }).toThrow(Error)
      expect(() => { Color.color(255, 255, 255, 256) }).toThrow(Error)

      expect(() => { Color.color('255', 255, 255, 255) }).toThrow(Error)
      expect(() => { Color.color(255, '255', 255, 255) }).toThrow(Error)
      expect(() => { Color.color(255, 255, '255', 255) }).toThrow(Error)
      expect(() => { Color.color(255, 255, 255, '255') }).toThrow(Error)
    })

    it('throws an error when the named color is invalid', () => {
      expect(() => { Color.color('blues') }).toThrow(Error)
      expect(() => { Color.color('') }).toThrow(Error)
    })
  })
})
