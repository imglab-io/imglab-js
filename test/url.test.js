import Url from '../src/url'
import Source from '../src/source'
import Color from '../src/color'
import Position from '../src/position'

const color = Color.color
const position = Position.position

const SECURE_KEY = 'ixUd9is/LDGBw6NPfLCGLjO/WraJlHdytC1+xiIFj22mXAWs/6R6ws4gxSXbDcUHMHv0G+oiTgyfMVsRS2b3'
const SECURE_SALT = 'c9G9eYKCeWen7vkEyV1cnr4MZkfLI/yo6j72JItzKHjMGDNZKqPFzRtup//qiT51HKGJrAha6Gv2huSFLwJr'

describe('Url', () => {
  describe('url using source name', () => {
    it('returns url without params', () => {
      const url = Url.url('assets', 'example.jpeg')

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg')
    })

    it('returns url with params', () => {
      const url = Url.url('assets', 'example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with null params', () => {
      const url = Url.url('assets', 'example.jpeg', { width: 200, download: null })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&download=')
    })

    it('returns url with params using string path', () => {
      const url = Url.url('assets', 'example.jpeg', { width: 200, height: 300, watermark: 'example.svg', format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=example.svg&format=png')
    })

    it('returns url with params using string path with inline params', () => {
      const url =
        Url.url(
          'assets',
          'example.jpeg',
          {
            width: 200,
            height: 300,
            watermark: 'example.svg?width=100&format=png',
            format: 'png'
          }
        )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=example.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using rgb color helper', () => {
      const url = Url.url('assets', 'example.jpeg', { width: 200, height: 300, backgroundColor: color(255, 128, 122) })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&background-color=255%2C128%2C122')
    })

    it('returns url with params using rgba color helper', () => {
      const url = Url.url('assets', 'example.jpeg', { width: 200, height: 300, backgroundColor: color(255, 128, 122, 128) })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&background-color=255%2C128%2C122%2C128')
    })

    it('returns url with params using named color helper', () => {
      const url = Url.url('assets', 'example.jpeg', { width: 200, height: 300, backgroundColor: color('blue') })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&background-color=blue')
    })

    it('returns url with params using horizontal and vertical position helper', () => {
      const url = Url.url('assets', 'example.jpeg', { width: 200, height: 300, mode: 'crop', crop: position('left', 'bottom') })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&mode=crop&crop=left%2Cbottom')
    })

    it('returns url with params using vertical and horizontal position helper', () => {
      const url = Url.url('assets', 'example.jpeg', { width: 200, height: 300, mode: 'crop', crop: position('bottom', 'left') })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&mode=crop&crop=bottom%2Cleft')
    })

    it('returns url with params using position helper', () => {
      const url = Url.url('assets', 'example.jpeg', { width: 200, height: 300, mode: 'crop', crop: position('left') })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&mode=crop&crop=left')
    })

    it('returns url with params using url function with source', () => {
      const source = new Source('assets')

      const url =
        Url.url(
          'assets',
          'example.jpeg',
          {
            width: 200,
            height: 300,
            watermark: Url.url(source, 'example.svg', { width: 100, format: 'png' }),
            format: 'png'
          }
        )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fassets.imglab-cdn.net%2Fexample.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using url function with source name', () => {
      const url =
        Url.url(
          'assets',
          'example.jpeg',
          {
            width: 200,
            height: 300,
            watermark: Url.url('assets', 'example.svg', { width: 100, format: 'png' }),
            format: 'png'
          }
        )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fassets.imglab-cdn.net%2Fexample.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using underscore attributes', () => {
      const url = Url.url('assets', 'example.jpeg', { trim: 'color', trim_color: 'orange' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with params using camel case attributes', () => {
      const url = Url.url('assets', 'example.jpeg', { trim: 'color', trimColor: 'orange' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with params using quoted attributes with hyphens', () => {
      const url = Url.url('assets', 'example.jpeg', { trim: 'color', 'trim-color': 'orange' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with expires param using a Date instance', () => {
      const url = Url.url('assets', 'example.jpeg', { width: 200, height: 300, expires: new Date(1464096368 * 1000) })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&expires=1464096368')
    })

    it('returns url with path starting with slash', () => {
      const url = Url.url('assets', '/example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path starting with slash using reserved characters', () => {
      const url = Url.url('assets', '/example image%2C01%2C02.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path starting and ending with slash', () => {
      const url = Url.url('assets', '/example.jpeg/', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path starting and ending with slash using reserved characters', () => {
      const url = Url.url('assets', '/example image%2C01%2C02.jpeg/', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting with slash', () => {
      const url = Url.url('assets', '/subfolder/example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting with slash using reserved characters', () => {
      const url = Url.url('assets', '/subfolder images/example image%2C01%2C02.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder%20images/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting and ending with slash', () => {
      const url = Url.url('assets', '/subfolder/example.jpeg/', { width: 200, height: 300, format: 'png'})

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting and ending with slash using reserved characters', () => {
      const url = Url.url('assets', '/subfolder images/example image%2C01%2C02.jpeg/', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder%20images/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path using a http url', () => {
      const url = Url.url('assets', 'http://assets.com/subfolder/example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/http%3A%2F%2Fassets.com%2Fsubfolder%2Fexample.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path using a http url with reserved characters', () => {
      const url = Url.url('assets', 'http://assets.com/subfolder/example%2C01%2C02.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/http%3A%2F%2Fassets.com%2Fsubfolder%2Fexample%252C01%252C02.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path using a https url', () =>  {
      const url = Url.url('assets', 'https://assets.com/subfolder/example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/https%3A%2F%2Fassets.com%2Fsubfolder%2Fexample.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path using a https url with reserved characters', () => {
      const url = Url.url('assets', 'https://assets.com/subfolder/example%2C01%2C02.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/https%3A%2F%2Fassets.com%2Fsubfolder%2Fexample%252C01%252C02.jpeg?width=200&height=300&format=png')
    })
  })

  describe('url using source', () => {
    it('returns url without params', () => {
      const url = Url.url(new Source('assets'), 'example.jpeg')

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg')
    })

    it('returns url with params', () => {
      const url = Url.url(new Source('assets'), 'example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with null params', () => {
      const url = Url.url(new Source('assets'), 'example.jpeg', { width: 200, download: null })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&download=')
    })

    it('returns url with params using string path', () => {
      const url = Url.url(
        new Source('assets'),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: 'example.svg',
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=example.svg&format=png')
    })

    it('returns url with params using string path with inline params', () => {
      const url = Url.url(
        new Source('assets'),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: 'example.svg?width=100&format=png',
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=example.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using url with source', () => {
      const source = new Source('assets')

      const url = Url.url(
        source,
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: Url.url(source, 'example.svg', { width: 100, format: 'png' }),
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fassets.imglab-cdn.net%2Fexample.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using url with source name', () => {
      const url = Url.url(
        new Source('assets'),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: Url.url('assets', 'example.svg', { width: 100, format: 'png' }),
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fassets.imglab-cdn.net%2Fexample.svg%3Fwidth%3D100%26format%3Dpng&format=png')
    })

    it('returns url with params using underscore attributes', () => {
      const url = Url.url(new Source('assets'), 'example.jpeg', { trim: 'color', trim_color: 'orange' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with params using camel case attributes', () => {
      const url = Url.url(new Source('assets'), 'example.jpeg', { trim: 'color', trimColor: 'orange' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with params using quoted attributes with hyphens', () => {
      const url = Url.url(new Source('assets'), 'example.jpeg', { trim: 'color', 'trim-color': 'orange' })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?trim=color&trim-color=orange')
    })

    it('returns url with expires param using a Date instance', () => {
      const url = Url.url(new Source('assets'), 'example.jpeg', { width: 200, height: 300, expires: new Date(1464096368 * 1000) })

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&expires=1464096368')
    })

    it('returns url with disabled subdomains', () => {
      const url = Url.url(
        new Source('assets', { subdomains: false }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://imglab-cdn.net/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with disabled https', () => {
      const url = Url.url(
        new Source('assets', { https: false }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('http://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with host', () => {
      const url = Url.url(
        new Source('assets', { host: 'imglab.net' }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab.net/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with port', () => {
      const url = Url.url(
        new Source('assets', { port: 8080 }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net:8080/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with disabled subdomains, disabled https, host and port', () => {
      const url = Url.url(
        new Source('assets', { subdomains: false, https: false, host: 'imglab.net', port: 8080 }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('http://imglab.net:8080/assets/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path starting with slash', () => {
      const url = Url.url(
        new Source('assets'),
        '/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path starting with slash using reserved characters', () => {
      const url = Url.url(
        new Source('assets'),
        '/example image%2C01%2C02.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path starting and ending with slash', () => {
      const url = Url.url(
        new Source('assets'),
        '/example.jpeg/',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path starting and ending with slash using reserved characters', () => {
      const url = Url.url(
        new Source('assets'),
        '/example image%2C01%2C02.jpeg/',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting with slash', () => {
      const url = Url.url(
        new Source('assets'),
        '/subfolder/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting with slash using reserved characters', () => {
      const url = Url.url(
        new Source('assets'),
        '/subfolder images/example image%2C01%2C02.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder%20images/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting and ending with slash', () => {
      const url = Url.url(
        new Source('assets'),
        '/subfolder/example.jpeg/',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder/example.jpeg?width=200&height=300&format=png')
    })

    it('returns url with subfolder path starting and ending with slash using reserved characters', () => {
      const url = Url.url(
        new Source('assets'),
        '/subfolder images/example image%2C01%2C02.jpeg/',
        {
          width: 200,
          height: 300,
          format: 'png'
        })

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder%20images/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path using a http url', () => {
      const url = Url.url(
        new Source('assets'),
        'http://assets.com/subfolder/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/http%3A%2F%2Fassets.com%2Fsubfolder%2Fexample.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path using a http url with reserved characters', () => {
      const url = Url.url(
        new Source('assets'),
        'http://assets.com/subfolder/example%2C01%2C02.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/http%3A%2F%2Fassets.com%2Fsubfolder%2Fexample%252C01%252C02.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path using a https url', () => {
      const url = Url.url(
        new Source('assets'),
        'https://assets.com/subfolder/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/https%3A%2F%2Fassets.com%2Fsubfolder%2Fexample.jpeg?width=200&height=300&format=png')
    })

    it('returns url with path using a https url with reserved characters', () => {
      const url = Url.url(
        new Source('assets'),
        'https://assets.com/subfolder/example%2C01%2C02.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/https%3A%2F%2Fassets.com%2Fsubfolder%2Fexample%252C01%252C02.jpeg?width=200&height=300&format=png')
    })
  })

  describe('url using secure source', () => {
    it('returns url without params', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg'
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?signature=aRgmnJ-7b2A0QLxXpR3cqrHVYmCfpRCOglL-nsp7SdQ')
    })

    it('returns url with params', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with null params', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          width: 200,
          download: null
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&download=&signature=ljL9HNRaxVrk7jfQaf6FPYFZn4RJzQPCW-aVNJoIQI8')
    })

    it('returns url with params using string path', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: 'example.svg',
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=example.svg&format=png&signature=xrwElVGVPyOrcTCNFnZiAa-tzkUp1ISrjnvEShSVsAg')
    })

    it('returns url with params using string path with inline params', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: 'example.svg?width=100&format=png',
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=example.svg%3Fwidth%3D100%26format%3Dpng&format=png&signature=0yhBOktmTTVC-ANSxMuGK_LakyjCOlnGTSN3I13B188')
    })

    it('returns url with params using url with source', () => {
      const source = new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT })

      const url = Url.url(
        source,
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: Url.url(source, 'example.svg', { width: 100, format: 'png' }),
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Fassets.imglab-cdn.net%2Fexample.svg%3Fwidth%3D100%26format%3Dpng%26signature%3DiKKUBWG4kZBv6CVxwaWGPpHd9LLTfuj9CBWamNYtWaI&format=png&signature=ZMT8l8i9hKs4aYiIUXpGcMSzOGHS8xjUlQeTrvE8ESA')
    })

    it('returns url with params using url with source name', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          watermark: Url.url(new Source('fixtures'), 'example.svg', { width: 100, format: 'png' }),
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&watermark=https%3A%2F%2Ffixtures.imglab-cdn.net%2Fexample.svg%3Fwidth%3D100%26format%3Dpng&format=png&signature=6BowGGEXe9wUmGa4xkhoscfPkqrLGumkIglhPQEkNuo')
    })

    it('returns url with params using underscore attributes', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          trim: 'color',
          trim_color: 'orange'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?trim=color&trim-color=orange&signature=cfYzBKvaWJhg_4ArtL5IafGYU6FEgRb_5ZADIgvviWw')
    })

    it('returns url with params using camel case attributes', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          trim: 'color',
          trimColor: 'orange'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?trim=color&trim-color=orange&signature=cfYzBKvaWJhg_4ArtL5IafGYU6FEgRb_5ZADIgvviWw')
    })

    it('returns url with params using quoted attributes with hyphens', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          trim: 'color',
          'trim-color': 'orange'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?trim=color&trim-color=orange&signature=cfYzBKvaWJhg_4ArtL5IafGYU6FEgRb_5ZADIgvviWw')
    })

    it('returns url with expires param using a Date instance', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          expires: new Date(1464096368 * 1000)
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&expires=1464096368&signature=DpkRMiecDlOaQAQM5IQ8Cd4ek8nGvfPxV6XmCN0GbAU')
    })

    it('returns url with disabled subdomains', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT, subdomains: false }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://imglab-cdn.net/assets/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with disabled https', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT, https: false }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('http://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with host', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT, host: 'imglab.net' }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab.net/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with port', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT, port: 8080 }),
        'example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net:8080/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with disabled subdomains, disabled https, host and port', () => {
      const source = new Source(
        'assets',
        {
          secureKey: SECURE_KEY,
          secureSalt: SECURE_SALT,
          subdomains: false,
          https: false,
          host: 'imglab.net',
          port: 8080
        }
      )

      const url = Url.url(source, 'example.jpeg', { width: 200, height: 300, format: 'png' })

      expect(url).toBe('http://imglab.net:8080/assets/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with path starting with slash', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with path starting with slash using reserved characters', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/example image%2C01%2C02.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png&signature=yZcUhTCB9VB3qzjyIJCCX_pfJ76Gb6kHe7KwusAPl-w')
    })

    it('returns url with path starting and ending with slash', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/example.jpeg/',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example.jpeg?width=200&height=300&format=png&signature=VJ159IlBl_AlN59QWvyJov5SlQXlrZNpXgDJLJgzP8g')
    })

    it('returns url with path starting and ending with slash using reserved characters', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/example image%2C01%2C02.jpeg/',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png&signature=yZcUhTCB9VB3qzjyIJCCX_pfJ76Gb6kHe7KwusAPl-w')
    })

    it('returns url with subfolder path starting with slash', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/subfolder/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder/example.jpeg?width=200&height=300&format=png&signature=3jydAIXhF8Nn_LXKhog2flf7FsACzISi_sXCKmASkOs')
    })

    it('returns url with subfolder path starting with slash using reserved characters', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/subfolder images/example image%2C01%2C02.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder%20images/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png&signature=2oAmYelI7UEnvqSSPCfUA25TmS7na1FRVTaxfe5ADyY')
    })

    it('returns url with subfolder path starting and ending with slash', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/subfolder/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder/example.jpeg?width=200&height=300&format=png&signature=3jydAIXhF8Nn_LXKhog2flf7FsACzISi_sXCKmASkOs')
    })

    it('returns url with subfolder path starting and ending with slash using reserved characters', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        '/subfolder images/example image%2C01%2C02.jpeg/',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/subfolder%20images/example%20image%252C01%252C02.jpeg?width=200&height=300&format=png&signature=2oAmYelI7UEnvqSSPCfUA25TmS7na1FRVTaxfe5ADyY')
    })

    it('returns url with path using a http url', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'http://assets.com/subfolder/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/http%3A%2F%2Fassets.com%2Fsubfolder%2Fexample.jpeg?width=200&height=300&format=png&signature=MuzfKbHDJY6lzeFQGRcsCS8DzxgL4nCpIowOMFLR1kA')
    })

    it('returns url with path using a http url with reserved characters', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'http://assets.com/subfolder/example%2C01%2C02.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/http%3A%2F%2Fassets.com%2Fsubfolder%2Fexample%252C01%252C02.jpeg?width=200&height=300&format=png&signature=78e-ysfcy3d0e0rj70QJQ3wpuwI_hAl9ZYxIUVRw62I')
    })

    it('returns url with path using a https url', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'https://assets.com/subfolder/example.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/https%3A%2F%2Fassets.com%2Fsubfolder%2Fexample.jpeg?width=200&height=300&format=png&signature=7Dp8Q01u_5YmpmH-j_y4P5vzOn_9EGvh77B3fi2Ke-s')
    })

    it('returns url with path using a https url with reserved characters', () => {
      const url = Url.url(
        new Source('assets', { secureKey: SECURE_KEY, secureSalt: SECURE_SALT }),
        'https://assets.com/subfolder/example%2C01%2C02.jpeg',
        {
          width: 200,
          height: 300,
          format: 'png'
        }
      )

      expect(url).toBe('https://assets.imglab-cdn.net/https%3A%2F%2Fassets.com%2Fsubfolder%2Fexample%252C01%252C02.jpeg?width=200&height=300&format=png&signature=-zvh2hWXP8bHkoJVh8AdJFe9Kqdd1HpP1c2UmuQcYFQ')
    })
  })

  describe('url using an invalid source or source name argument', () => {
    it('throws a new error when the source or source name is invalid', () => {
      expect(() => { Url.url(null, 'example.jpeg') }).toThrow(Error)
      expect(() => { Url.url({}, 'example.jpeg') }).toThrow(Error)
      expect(() => { Url.url(10, 'example.jpeg') }).toThrow(Error)
    })
  })
})
