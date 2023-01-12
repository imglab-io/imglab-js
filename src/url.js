import Source from './source'
import Signature from './signature'
import Utils from './url/utils'

export default class Url {
  static url (source, path, params = {}) {
    if (typeof source === 'string') {
      return Url.#urlForSource(new Source(source), path, params)
    }

    if (source instanceof Source) {
      return Url.#urlForSource(source, path, params)
    }

    throw new Error('Invalid source name or source')
  }

  static #urlForSource (source, path, params) {
    const normalizedPath = Utils.normalizePath(path)
    const normalizedParams = Utils.normalizeParams(params)

    const url = new URL('https://imglab-cdn.net')

    url.protocol = source.scheme()
    url.hostname = source.host
    url.port = source.port
    url.pathname = source.path(Url.#encodePath(normalizedPath))
    url.search = Url.#encodeParams(source, normalizedPath, normalizedParams)

    return url.toString()
  }

  static #encodePath (path) {
    if (Utils.isWebURL(path)) {
      return encodeURIComponent(path)
    } else {
      return path.split('/').map((pathComponent) =>
        encodeURIComponent(pathComponent)
      ).join('/')
    }
  }

  static #encodeParams (source, path, params) {
    if (Object.keys(params).length === 0) {
      return Url.#encodeEmptyParams(source, path)
    }

    if (source.isSecure()) {
      params.signature = Signature.generate(source, path, new URLSearchParams(params).toString())
    }

    return new URLSearchParams(params)
  }

  static #encodeEmptyParams (source, path) {
    if (source.isSecure()) {
      return new URLSearchParams({ signature: Signature.generate(source, path) })
    } else {
      return new URLSearchParams()
    }
  }
}
