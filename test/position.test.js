import Position from '../src/position'

describe('Position', () => {
  describe('position', () => {
    it('returns expected position as string', () => {
      expect(Position.position('left')).toBe('left')
      expect(Position.position('center')).toBe('center')
      expect(Position.position('right')).toBe('right')

      expect(Position.position('top')).toBe('top')
      expect(Position.position('middle')).toBe('middle')
      expect(Position.position('bottom')).toBe('bottom')
    })

    it('returns expected horizontal vertical position as string', () => {
      expect(Position.position('left', 'top')).toBe('left,top')
      expect(Position.position('left', 'middle')).toBe('left,middle')
      expect(Position.position('left', 'bottom')).toBe('left,bottom')

      expect(Position.position('center', 'top')).toBe('center,top')
      expect(Position.position('center', 'middle')).toBe('center,middle')
      expect(Position.position('center', 'bottom')).toBe('center,bottom')

      expect(Position.position('right', 'top')).toBe('right,top')
      expect(Position.position('right', 'middle')).toBe('right,middle')
      expect(Position.position('right', 'bottom')).toBe('right,bottom')
    })

    it('returns expected vertical horizontal position as string', () => {
      expect(Position.position('top', 'left')).toBe('top,left')
      expect(Position.position('top', 'center')).toBe('top,center')
      expect(Position.position('top', 'right')).toBe('top,right')

      expect(Position.position('middle', 'left')).toBe('middle,left')
      expect(Position.position('middle', 'center')).toBe('middle,center')
      expect(Position.position('middle', 'right')).toBe('middle,right')

      expect(Position.position('bottom', 'left')).toBe('bottom,left')
      expect(Position.position('bottom', 'center')).toBe('bottom,center')
      expect(Position.position('bottom', 'right')).toBe('bottom,right')
    })

    it('throws an error when the position is invalid', () => {
      expect(() => { Position.position('lefts') }).toThrow(Error)
      expect(() => { Position.position('') }).toThrow(Error)
    })

    it('throws an error when the horizontal vertical position is invalid', () => {
      expect(() => { Position.position('left', 'left') }).toThrow(Error)
      expect(() => { Position.position('left', 'center') }).toThrow(Error)
      expect(() => { Position.position('left', 'right') }).toThrow(Error)

      expect(() => { Position.position('center', 'center') }).toThrow(Error)
      expect(() => { Position.position('center', 'left') }).toThrow(Error)
      expect(() => { Position.position('center', 'right') }).toThrow(Error)

      expect(() => { Position.position('right', 'right') }).toThrow(Error)
      expect(() => { Position.position('right', 'left') }).toThrow(Error)
      expect(() => { Position.position('right', 'center') }).toThrow(Error)

      expect(() => { Position.position('top', 'top') }).toThrow(Error)
      expect(() => { Position.position('top', 'middle') }).toThrow(Error)
      expect(() => { Position.position('top', 'bottom') }).toThrow(Error)

      expect(() => { Position.position('middle', 'middle') }).toThrow(Error)
      expect(() => { Position.position('middle', 'top') }).toThrow(Error)
      expect(() => { Position.position('middle', 'bottom') }).toThrow(Error)

      expect(() => { Position.position('bottom', 'bottom') }).toThrow(Error)
      expect(() => { Position.position('bottom', 'top') }).toThrow(Error)
      expect(() => { Position.position('bottom', 'middle') }).toThrow(Error)
    })
  })
})
