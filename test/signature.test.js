import Signature from '../src/signature'
import Source from '../src/source'

const SECURE_KEY = 'ixUd9is/LDGBw6NPfLCGLjO/WraJlHdytC1+xiIFj22mXAWs/6R6ws4gxSXbDcUHMHv0G+oiTgyfMVsRS2b3'
const SECURE_SALT = 'c9G9eYKCeWen7vkEyV1cnr4MZkfLI/yo6j72JItzKHjMGDNZKqPFzRtup//qiT51HKGJrAha6Gv2huSFLwJr'

describe('Signature', () => {
  describe('generate', () => {
    it('returns signature with encoded params', () => {
      const signature = Signature.generate(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        new URLSearchParams({ width: 200, height: 300, format: 'png' }).toString()
      )

      expect(signature).toBe('VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns signature without encoded params', () => {
      const signature = Signature.generate(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg'
      )

      expect(signature).toBe('aRgmnJ-7b2A0QLxXpR3cqrHVYmCfpRCOglL-nsp7SdQ')
    })
  })
})
