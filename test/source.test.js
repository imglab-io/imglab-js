import Source from '../src/source'

describe('Source', () => {
  describe('constructor', () => {
    it('returns source instance with default values', () => {
      const source = new Source('assets')

      expect(source.host).toBe('assets.imglab-cdn.net')
      expect(source.https).toBe(true)
      expect(source.name).toBe('assets')
      expect(source.port).toBeUndefined()
      expect(source.secureKey).toBeUndefined()
      expect(source.secureSalt).toBeUndefined()
      expect(source.subdomains).toBe(true)
    })

    it('sets a custom host', () => {
      const source = new Source('assets', { host: 'imglab.net' })

      expect(source.name).toBe('assets')
      expect(source.host).toBe('assets.imglab.net')
    })

    it('sets https as false when specified', () => {
      const source = new Source('assets', { https: false })

      expect(source.name).toBe('assets')
      expect(source.https).toBe(false)
    })

    it('sets a custom port', () => {
      const source = new Source('assets', { port: 8080 })

      expect(source.name).toBe('assets')
      expect(source.port).toBe(8080)
    })

    it('sets a secureKey', () => {
      const source = new Source('assets', { secureKey: 'secure-key' })

      expect(source.name).toBe('assets')
      expect(source.secureKey).toBe('secure-key')
    })

    it('sets a secureSalt', () => {
      const source = new Source('assets', { secureSalt: 'secure-salt' })

      expect(source.name).toBe('assets')
      expect(source.secureSalt).toBe('secure-salt')
    })

    test('sets subdomains as false when specified', () => {
      const source = new Source('assets', { subdomains: false })

      expect(source.name).toBe('assets')
      expect(source.subdomains).toBe(false)
    })
  })

  describe('scheme', () => {
    expect(new Source('assets').scheme()).toBe('https')
    expect(new Source('assets', { https: true }).scheme()).toBe('https')
    expect(new Source('assets', { https: false }).scheme()).toBe('http')
  })

  describe('host', () => {
    expect(new Source('assets').host).toBe('assets.imglab-cdn.net')
    expect(new Source('assets', { subdomains: false }).host).toBe('imglab-cdn.net')
    expect(new Source('assets', { subdomains: false, host: 'imglab.net' }).host).toBe('imglab.net')
    expect(new Source('assets', { subdomains: true }).host).toBe('assets.imglab-cdn.net')
    expect(new Source('assets', { subdomains: true, host: 'imglab.net' }).host).toBe('assets.imglab.net')
  })

  describe('path', () => {
    expect(new Source('assets').path('example.jpeg')).toBe('example.jpeg')
    expect(new Source('assets').path('subfolder/example.jpeg')).toBe('subfolder/example.jpeg')
    expect(new Source('assets', { subdomains: false }).path('example.jpeg')).toBe('assets/example.jpeg')
    expect(new Source('assets', { subdomains: false }).path('subfolder/example.jpeg')).toBe('assets/subfolder/example.jpeg')
    expect(new Source('assets', { subdomains: true }).path('example.jpeg')).toBe('example.jpeg')
    expect(new Source('assets', { subdomains: true }).path('subfolder/example.jpeg')).toBe('subfolder/example.jpeg')
  })

  describe('isSecure', () => {
    expect(new Source('assets').isSecure()).toBe(false)
    expect(new Source('assets', { secureKey: 'secure-key' }).isSecure()).toBe(false)
    expect(new Source('assets', { secureSalt: 'secure-salt' }).isSecure()).toBe(false)
    expect(new Source('assets', { secureKey: 'secure-key', secureSalt: 'secure-salt' }).isSecure()).toBe(true)
  })
})
