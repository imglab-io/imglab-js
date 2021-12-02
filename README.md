# imglab

`imglab` is the official Javascript library to integrate with imglab services.

## Installation

You can install imglab using:

```sh
$ npm install @imglab/core
```

## Usage

### CommonJS

```javascript
const Imglab = require('@imglab/core')

Imglab.url('assets', 'example.jpeg', { width: 500, height: 600 })
```

### ES6 Modules

```javascript
import Imglab from '@imglab/core'

Imglab.url('assets', 'example.jpeg', { width: 500, height: 600 })
```

## Browser

```javascript
Imglab.url('assets', 'example.jpeg', { width: 500, height: 600 })
```

## Generating URLs

You can use `Imglab.url` function to generate imglab compatible URLs for your application.

The easiest way to generate a URL is to specify the `sourceName`, `path` and required `parameters`:

```javascript
Imglab.url('assets', 'image.jpeg', { width: 500, height: 600 })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600'

Imglab.url('avatars', 'user-01.jpeg', { width: 300, height: 300, mode: 'crop', crop: 'face', format: 'webp' })
'https://cdn.imglab.io/avatars/user-01.jpeg?width=300&height=300&mode=crop&crop=face&format=webp'
```

If some specific settings are required for the source you can use an instance of `Imglab.Source` class instead of a `string` source name:

```javascript
Imglab.url(new Imglab.Source('assets'), 'image.jpeg', { width: 500, height: 600 })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600'
```

### Using secure image sources

For sources that require signed URLs you can specify `secureKey` and `secureSalt` attributes:

```javascript
const source = new Imglab.Source('assets', { secureKey: 'assets-secure-key', secureSalt: 'assets-secure-salt' })

Imglab.url(source, 'image.jpeg', { width: 500, height: 600 })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&signature=generated-signature'
```

`signature` query parameter will be automatically generated and attached to the returned URL.

> Note: `secureKey` and `secureSalt` are secret attributes which **should never be used in a frontend application**. For server applications you should never add them to a code repository. Please use environment vars or other secure method to use them in your application.

### Using HTTP instead of HTTPS

In the case that HTTP schema is required instead of HTTPS you can set `https` attribute to `false` when creating the source:

```javascript
Imglab.url(new Imglab.Source('assets', { https: false }), 'image.jpeg', { width: 500, height: 600 })
'http://cdn.imglab.io/assets/image.jpeg?width=500&height=600'
```

> Note: HTTPS is the default and recommended way to generate URLs with imglab.

### Specifying parameters

Any parameter from the imglab API can be used to generate URLs with `Imglab.url` function. For parameters that required dashes characters like `trim-color` you can use camel-case attribute keys like `trimColor` or quoted keys like `'trim-color'` those will be normalized in the URL generation to it's correct form:

The preferred way is to use camel-case key attribute names:

```javascript
Imglab.url('assets', 'image.jpeg', { trim: 'color', trimColor: 'black' })
'https://cdn.imglab.io/assets/image.jpeg?trim=color&trim-color=black'
```

It is possible to use strings attribute keys too:

```javascript
Imglab.url('assets', 'image.jpeg', { trim: 'color', 'trim-color': 'black' })
'https://cdn.imglab.io/assets/image.jpeg?trim=color&trim-color=black'
```

Or even snake-case attribute keys:

```javascript
Imglab.url('assets', 'image.jpeg', { trim: 'color', trim_color: 'black' })
'https://cdn.imglab.io/assets/image.jpeg?trim=color&trim-color=black'
```

### Specifying color parameters

Some imglab parameters can receive a color as value. It is possible to specify these color values as strings:

```javascript
// Specifying a RGB color as string
Imglab.url('assets', 'image.jpeg', { width: 500, height: 600, mode: 'contain', backgroundColor: '255,0,0' })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&mode=contain&background-color=255%2C0%2C0'

// Specifying a RGBA color as string
Imglab.url('assets', 'image.jpeg', { width: 500, height: 600, mode: 'contain', backgroundColor: '255,0,0,128' })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&mode=contain&background-color=255%2C0%2C0%2C128'

// Specifying a named color as string
Imglab.url('assets', 'image.jpeg', { width: 500, height: 600, mode: 'contain', backgroundColor: 'red' })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&mode=contain&background-color=red'

// Specifying a hexadecimal color as string
Imglab.url('assets', 'image.jpeg', { width: 500, height: 600, mode: 'contain', backgroundColor: 'F00' })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&mode=contain&background-color=F00'
```

You can additionally use `Imglab.color` helper function to specify these color values:

```javascript
// If you prefer to avoid Imglab scope you can load color helper function in a constant
const color = Imglab.color

// Using color helper for a RGB color
Imglab.url('assets', 'image.jpeg', { width: 500, height: 600, mode: 'contain', backgroundColor: color(255, 0, 0) })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&mode=contain&background-color=255%2C0%2C0'

// Using color helper for a RGBA color
Imglab.url('assets', 'image.jpeg', { width: 500, height: 600, mode: 'contain', backgroundColor: color(255, 0, 0, 128) })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&mode=contain&background-color=255%2C0%2C0%2C128'

// Using color helper for a named color
Imglab.url('assets', 'image.jpeg', { width: 500, height: 600, mode: 'contain', backgroundColor: color('red') })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&mode=contain&background-color=red'
```

> Note: specify hexadecimal color values using `Imglab.color` helper function is not allowed. You can use strings instead.

### Specifying position parameters

Some imglab parameters can receive a position as value. It is possible to specify these values using strings:

```javascript
// Specifying a horizontal and vertical position as string
Imglab.url('assets', 'image.jpeg', { width: 500, height: 500, mode: 'crop', crop: 'left,top' })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=500&mode=crop&crop=left%2Ctop'

// Specifying a vertical and horizontal position as string
Imglab.url('assets', 'image.jpeg', { width: 500, height: 500, mode: 'crop', crop: 'top,left' })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=500&mode=crop&crop=top%2Cleft'

// Specifying a position as string
Imglab.url('assets', 'image.jpeg', { width: 500, height: 500, mode: 'crop', crop: 'left' })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=500&mode=crop&crop=left'
```

You can additionally use `Imglab.position` helper function to specify these position values:

```javascript
// If you prefer to avoid Imglab scope you can load position helper function in a constant
const position = Imglab.position

// Using position helper for a horizontal and vertical position
Imglab.url('assets', 'image.jpeg', { width: 500, height: 500, mode: 'crop', crop: position('left', 'top') })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=500&mode=crop&crop=left%2Ctop'

// Using position helper for a vertical and horizontal position
Imglab.url('assets', 'image.jpeg', { width: 500, height: 500, mode: 'crop', crop: position('top', 'left') })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=500&mode=crop&crop=top%2Cleft'

// Using position helper for a position
Imglab.url('assets', 'image.jpeg', { width: 500, height: 500, mode: 'crop', crop: position('left') })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=500&mode=crop&crop=left'
```

### Specifying URL parameters

Some imglab parameters can receive URLs as values. It is possible to specify these parameter values as strings.

```javascript
Imglab.url('assets', 'image.jpeg', { width: 500, height: 600, watermark: 'logo.svg' })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&watermark=logo.svg'
```

And even use parameters if required:

```javascript
Imglab.url('assets', 'image.jpeg', { width: 500, height: 600, watermark: 'logo.svg?width=100&format=png' })
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&watermark=logo.svg%3Fwidth%3D100%26format%3Dpng'
```

Additionally you can use nested `Imglab.url` calls to specify these URL values:

```javascript
Imglab.url(
  'assets',
  'image.jpeg',
  {
    width: 500,
    height: 600,
    watermark: Imglab.url('assets', 'logo.svg', { width: 100, format: 'png' })
  }
)
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&watermark=https%3A%2F%2Fcdn.imglab.io%2Fassets%2Flogo.svg%3Fwidth%3D100%26format%3Dpng'
```

If the resource is located in a different source we can specify it using `Imglab.url`:

```javascript
Imglab.url(
  'assets',
  'image.jpeg',
  {
    width: 500,
    height: 600,
    watermark: Imglab.url('marketing', 'logo.svg', { width: 100, format: 'png' })
  }
)
'https://cdn.imglab.io/assets/image.jpeg?width=500&height=600&watermark=https%3A%2F%2Fcdn.imglab.io%2Fmarketing%2Flogo.svg%3Fwidth%3D100%26format%3Dpng'
```

Using secure sources for URLs parameter values is possible too:

```javascript
const marketingSource = new Imglab.Source('marketing', { secureKey: 'marketing-secure-key', secureSalt: 'marketing-secure-salt' })

Imglab.url(
  'assets',
  'image.jpeg',
  {
    width: 500,
    height: 600,
    watermark: Imglab.url(marketingSource, 'logo.svg', { width: 100, format: 'png' })
  }
)
```

`signature` query parameter will be automatically generated and attached to the nested URL value.

## Generating URLs for on-premises imglab server

For on-premises imglab server is possible to define custom sources pointing to your server location.

* `:https` - a `boolean` value specifying if the source should use https or not (default: `true`)
* `:host` - a `string` specifying the host where the imglab server is located. (default: `cdn.imglab.io`)
* `:port` - a `integer` specifying a port where the imglab server is located.
* `:subdomains` - a `boolean` value specifying if the source should be specified using subdomains instead of using the path. (default: `false`)

If we have our on-premises imglab server at `http://imglab.mycompany.com:8080` with a source named `web-images` we can use the following source settings to access a `logo.png` image:

```javascript
const source = new Imglab.Source('web-images', { https: false, host: 'imglab.mycompany.com', port: 8080 })

Imglab.url(source, 'logo.png', { width: 300, height: 300, format: 'png' })
'http://imglab.mycompany.com:8080/web-images/logo.png?width=300&height=300&format=png'
```

It is possible to use secure sources too:

```javascript
const source = new Imglab.Source(
  'web-images',
  {
    https: false,
    host: 'imglab.mycompany.com',
    port: 8080,
    secureKey: 'web-images-secure-key',
    secureSalt: 'web-images-secure-salt'
  }
)

Imglab.url(source, 'logo.png', { width: 300, height: 300, format: 'png' })
'http://imglab.mycompany.com:8080/web-images/logo.png?width=300&height=300&format=png&signature=generated-signature'
```

### Using sudomains sources

In the case that your on-premises imglab server is configured to use source names as subdomains you can set `subdomains` attribute to `true` to generate URLs using subdomains:

```javascript
const source = new Imglab.Source(
  'web-images',
  {
    https: false,
    host: 'imglab.mycompany.com',
    port: 8080,
    subdomains: true
  }
)

Imglab.url(source, 'marketing/logo.png', { width: 300, height: 300, format: 'png' })
'http://web-images.imglab.mycompany.com:8080/marketing/logo.png?width=300&height=300&format=png'
```

## License

imglab source code is released under [MIT License](LICENSE).
