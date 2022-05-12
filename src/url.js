import Source from './source'
import Signature from './signature'
import Utils from './utils'

export default class Url {
  static url(sourceNameOrSource, path, params = {}) {
    if (typeof sourceNameOrSource === 'string') {
      return Url.#urlForSource(new Source(sourceNameOrSource), path, params)
    }

    if (sourceNameOrSource instanceof Source) {
      return Url.#urlForSource(sourceNameOrSource, path, params)
    }

    throw new Error('Invalid source name or source')
  }

  static #urlForSource(source, path, params) {
    var normalizedPath = Utils.normalizePath(path)
    var normalizedParams = Utils.normalizeParams(params)

    var url = new URL('https://imglab-cdn.net')

    url.protocol = source.scheme()
    url.hostname = source.host
    url.port = source.port
    url.pathname = source.path(Url.#encodePath(normalizedPath))
    url.search = Url.#encodeParams(source, normalizedPath, normalizedParams)

    return url.toString()
  }

  static #encodePath(path) {
    if (Utils.isWebURL(path)) {
      return encodeURIComponent(path)
    } else {
      return path.split('/').map((pathComponent) =>
        encodeURIComponent(pathComponent)
      ).join('/')
    }
  }

  static #encodeParams(source, path, params) {
    if (Object.keys(params).length === 0) {
      return Url.#encodeEmptyParams(source, path)
    }

    if (source.isSecure()) {
      params['signature'] = Signature.generate(source, path, new URLSearchParams(params).toString())

      return new URLSearchParams(params)
    } else {
      return new URLSearchParams(params)
    }
  }

  static #encodeEmptyParams(source, path) {
    if (source.isSecure()) {
      return new URLSearchParams({ signature: Signature.generate(source, path) })
    } else {
      return new URLSearchParams()
    }
  }
}
