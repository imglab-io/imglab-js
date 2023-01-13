import _path from 'path'

export default class Source {
  static #DEFAULT_OPTS = { host: 'imglab-cdn.net', https: true, subdomains: true }

  #host
  #https
  #name
  #port
  #secureKey
  #secureSalt
  #subdomains

  constructor (name, opts = {}) {
    opts = { ...Source.#DEFAULT_OPTS, ...opts }

    this.#host = opts.host
    this.#https = opts.https
    this.#name = name
    this.#port = opts.port
    this.#secureKey = opts.secureKey
    this.#secureSalt = opts.secureSalt
    this.#subdomains = opts.subdomains
  }

  get host () {
    return (this.#subdomains ? `${this.#name}.${this.#host}` : this.#host)
  }

  get https () {
    return this.#https
  }

  get name () {
    return this.#name
  }

  get port () {
    return this.#port
  }

  get secureKey () {
    return this.#secureKey
  }

  get secureSalt () {
    return this.#secureSalt
  }

  get subdomains () {
    return this.#subdomains
  }

  scheme () {
    return (this.#https ? 'https' : 'http')
  }

  path (path) {
    return (this.#subdomains ? path : _path.join(this.#name, path))
  }

  isSecure () {
    return !!(this.#secureKey && this.#secureSalt)
  }
}
