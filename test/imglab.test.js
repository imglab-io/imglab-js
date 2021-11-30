import Imglab from '../src/imglab'
import Source from '../src/source'
import Color from '../src/color'
import Position from '../src/position'

const color = Color.color
const position = Position.position

const SECURE_KEY = 'ixUd9is/LDGBw6NPfLCGLjO/WraJlHdytC1+xiIFj22mXAWs/6R6ws4gxSXbDcUHMHv0G+oiTgyfMVsRS2b3'
const SECURE_SALT = 'c9G9eYKCeWen7vkEyV1cnr4MZkfLI/yo6j72JItzKHjMGDNZKqPFzRtup//qiT51HKGJrAha6Gv2huSFLwJr'

describe('Imglab', () => {
  describe('url using source name', () => {
    it('returns url without params', () => {
      const url = Imglab.url('assets', 'example.jpeg')

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg')
    })

    it('returns url with params', () => {
      const url = Imglab.url('assets', 'example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with params using string path', () => {
      const url = Imglab.url('assets', 'example.jpeg', { width: 200, height: 300, watermark: 'example.svg', format: 'png' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=example.svg&format=png')
    })

    it('returns url with params using string path with inline params', () => {
      const url =
        Imglab.url(
          'assets',
          'example.jpeg',
          {
            width: 200,
            height: 300,
            watermark: 'example.svg?width=100&format=png',
            format: 'png'
          }
        )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=example.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using rgb color helper', () => {
      const url = Imglab.url('assets', 'example.jpeg', { width: 200, height: 300, backgroundColor: color(255, 128, 122) })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&background-color=255%2C128%2C122')
    })

    it('returns url with params using rgba color helper', () => {
      const url = Imglab.url('assets', 'example.jpeg', { width: 200, height: 300, backgroundColor: color(255, 128, 122, 128) })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&background-color=255%2C128%2C122%2C128')
    })

    it('returns url with params using named color helper', () => {
      const url = Imglab.url('assets', 'example.jpeg', { width: 200, height: 300, backgroundColor: color('blue') })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&background-color=blue')
    })

    it('returns url with params using horizontal and vertical position helper', () => {
      const url = Imglab.url('assets', 'example.jpeg', { width: 200, height: 300, mode: 'crop', crop: position('left', 'bottom') })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&mode=crop&crop=left%2Cbottom')
    })

    it('returns url with params using vertical and horizontal position helper', () => {
      const url = Imglab.url('assets', 'example.jpeg', { width: 200, height: 300, mode: 'crop', crop: position('bottom', 'left') })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&mode=crop&crop=bottom%2Cleft')
    })

    it('returns url with params using position helper', () => {
      const url = Imglab.url('assets', 'example.jpeg', { width: 200, height: 300, mode: 'crop', crop: position('left') })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&mode=crop&crop=left')
    })

    it('returns url with params using url function with source', () => {
      const source = new Source('assets')

      const url =
        Imglab.url(
          'assets',
          'example.jpeg',
          {
            width: 200,
            height: 300,
            watermark: Imglab.url(source, 'example.svg', { width: 100, format: 'png' }),
            format: 'png'
          }
        )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fcdn.imglab.io%2Fassets%2Fexample.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using url function with source name', () => {
      const url =
        Imglab.url(
          'assets',
          'example.jpeg',
          {
            width: 200,
            height: 300,
            watermark: Imglab.url('assets', 'example.svg', { width: 100, format: 'png' }),
            format: 'png'
          }
        )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fcdn.imglab.io%2Fassets%2Fexample.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using underscore attributes', () => {
      const url = Imglab.url('assets', 'example.jpeg', { trim: 'color', trim_color: 'orange' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with params using camel case attributes', () => {
      const url = Imglab.url('assets', 'example.jpeg', { trim: 'color', trimColor: 'orange' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with params using quoted attributes with hyphens', () => {
      const url = Imglab.url('assets', 'example.jpeg', { trim: 'color', 'trim-color': 'orange' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with path starting with slash', () => {
      const url = Imglab.url('assets', '/example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path starting and ending with slash', () => {
      const url = Imglab.url('assets', '/example.jpeg/', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting with slash', () => {
      const url = Imglab.url('assets', '/subfolder/example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://cdn.imglab.io/assets/subfolder/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting and ending with slash', () => {
      const url = Imglab.url('assets', '/subfolder/example.jpeg/', { width: 200, height: 300, format: 'png'})

      expect(url).toBe('https://cdn.imglab.io/assets/subfolder/example.jpeg?width=200&height=300&format=png')
    })
  })

  describe('url using source', () => {
    it('returns url without params', () => {
      const url = Imglab.url(new Source('assets'), 'example.jpeg')

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg')
    })

    it('returns url with params', () => {
      const url = Imglab.url(new Source('assets'), 'example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with params using string path', () => {
      const url = Imglab.url(
        new Source('assets'),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: 'example.svg',
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=example.svg&format=png')
    })

    it('returns url with params using string path with inline params', () => {
      const url = Imglab.url(
        new Source('assets'),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: 'example.svg?width=100&format=png',
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=example.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using url with source', () => {
      const source = new Source('assets')

      const url = Imglab.url(
        source,
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: Imglab.url(source, 'example.svg', { width: 100, format: 'png' }),
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fcdn.imglab.io%2Fassets%2Fexample.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using url with source name', () => {
      const url = Imglab.url(
        new Source('assets'),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: Imglab.url('assets', 'example.svg', { width: 100, format: 'png' }),
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fcdn.imglab.io%2Fassets%2Fexample.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using underscore attributes', () => {
      const url = Imglab.url(new Source('assets'), 'example.jpeg', { trim: 'color', trim_color: 'orange' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with params using camel case attributes', () => {
      const url = Imglab.url(new Source('assets'), 'example.jpeg', { trim: 'color', trimColor: 'orange' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with params using quoted attributes with hyphens', () => {
      const url = Imglab.url(new Source('assets'), 'example.jpeg', { trim: 'color', 'trim-color': 'orange' })

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with subdomains', () => {
      const url = Imglab.url(
        new Source('assets', { subdomains: true }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.cdn.imglab.io/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with http', () => {
      const url = Imglab.url(
        new Source('assets', { https: false }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('http://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with host', () => {
      const url = Imglab.url(
        new Source('assets', { host: 'imglab.net' }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://imglab.net/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with port', () => {
      const url = Imglab.url(
        new Source('assets', { port: 8080 }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io:8080/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subdomains, http, host and port', () => {
      const url = Imglab.url(
        new Source('assets', { subdomains: true, https: false, host: 'imglab.net', port: 8080 }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('http://assets.imglab.net:8080/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path starting with slash', () => {
      const url = Imglab.url(
        new Source('assets'),
        '/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path starting and ending with slash', () => {
      const url = Imglab.url(
        new Source('assets'),
        '/example.jpeg/',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting with slash', () => {
      const url = Imglab.url(
        new Source('assets'),
        '/subfolder/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/subfolder/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting and ending with slash', () => {
      const url = Imglab.url(
        new Source('assets'),
        '/subfolder/example.jpeg/',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/subfolder/example.jpeg?width=200&height=300&format=png')
    })
  })

  describe('url using secure source', () => {
    it('returns url without params', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg'
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?signature=aRgmnJ-7b2A0QLxXpR3cqrHVYmCfpRCOglL-nsp7SdQ')
    })

    it('returns url with params', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with params using string path', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: 'example.svg',
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=example.svg&format=png&signature=xrwElVGVPyOrcTCNFnZiAa-tzkUp1ISrjnvEShSVsAg')
    })

    it('returns url with params using string path with inline params', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: 'example.svg?width=100&format=png',
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=example.svg%3Fwidth%3D100%26format%3Dpng&format=png&signature=0yhBOktmTTVC-ANSxMuGK_LakyjCOlnGTSN3I13B188')
    })

    it('returns url with params using url with source', () => {
      const source = new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT })

      const url = Imglab.url(
        source,
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: Imglab.url(source, 'example.svg', { width: 100, format: 'png' }),
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fcdn.imglab.io%2Fassets%2Fexample.svg%3Fwidth%3D100%26format%3Dpng%26signature%3DiKKUBWG4kZBv6CVxwaWGPpHd9LLTfuj9CBWamNYtWaI&format=png&signature=5__R2eDq59DYQnj64dyW3VlY-earzP6uyi624Q0Q4kU')
    })

    it('returns url with params using url with source name', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: Imglab.url(new Source('fixtures'), 'example.svg', { width: 100, format: 'png' }),
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fcdn.imglab.io%2Ffixtures%2Fexample.svg%3Fwidth%3D100%26format%3Dpng&format=png&signature=DiMzjeskcahfac0Xsy4QNj6qoU3dvKgOuFbHT7E4usU')
    })

    it('returns url with params using underscore attributes', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          trim: 'color',
          trim_color: 'orange'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?trim=color&trim-color=orange&signature=cfYzBKvaWJhg_4ArtL5IafGYU6FEgRb_5ZADIgvviWw')
    })

    it('returns url with params using camel case attributes', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          trim: 'color',
          trimColor: 'orange'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?trim=color&trim-color=orange&signature=cfYzBKvaWJhg_4ArtL5IafGYU6FEgRb_5ZADIgvviWw')
    })

    it('returns url with params using quoted attributes with hyphens', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          trim: 'color',
          'trim-color': 'orange'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?trim=color&trim-color=orange&signature=cfYzBKvaWJhg_4ArtL5IafGYU6FEgRb_5ZADIgvviWw')
    })

    it('returns url with subdomains', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT, subdomains: true }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.cdn.imglab.io/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with http', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT, https: false }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('http://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with host', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT, host: 'imglab.net' }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://imglab.net/assets/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with port', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT, port: 8080 }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io:8080/assets/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with subdomains, http, host and port', () => {
      const source = new Source(
        'assets',
        {
          secureKey: SECURE_KEY,
          secureSalt: SECURE_SALT,
          subdomains: true,
          https: false,
          host: 'imglab.net',
          port: 8080
        }
      )

      const url = Imglab.url(source, 'example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('http://assets.imglab.net:8080/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with path starting with slash', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with path starting and ending with slash', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/example.jpeg/',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with subfolder path starting with slash', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/subfolder/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/subfolder/example.jpeg?width=200&height=300&format=png&signature=3jydAIXhF8Nn_LXKhog2flf7FsACzISi_sXCKmASkOs')
    })

    it('returns url with subfolder path starting and ending with slash', () => {
      const url = Imglab.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/subfolder/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://cdn.imglab.io/assets/subfolder/example.jpeg?width=200&height=300&format=png&signature=3jydAIXhF8Nn_LXKhog2flf7FsACzISi_sXCKmASkOs')
    })
  })

  describe('url using an invalid source or source name argument', () => {
    it('throws a new error when the source or source name is invalid', () => {
      expect(() => { Imglab.url(null, 'example.jpeg') }).toThrow(Error)
      expect(() => { Imglab.url({}, 'example.jpeg') }).toThrow(Error)
      expect(() => { Imglab.url(10, 'example.jpeg') }).toThrow(Error)
    })
  })
})
