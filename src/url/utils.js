export default class Utils {
  static #NORMALIZE_PATH_PREFIX_REGEXP = new RegExp(/^\/*/)
  static #NORMALIZE_PATH_SUFFIX_REGEXP = new RegExp(/\/*$/)
  static #NORMALIZE_KEY_REGEXP = new RegExp(/([a-z])([A-Z])/g)

  static #WEB_URL_PROTOCOLS = ['https:', 'http:']

  static normalizePath (path) {
    return path.replace(Utils.#NORMALIZE_PATH_PREFIX_REGEXP, '').replace(Utils.#NORMALIZE_PATH_SUFFIX_REGEXP, '')
  }

  static normalizeParams (params) {
    return Object.entries(params).reduce((normalizedParams, [key, value]) => {
      return Object.assign(normalizedParams, Utils.#normalizeParam(Utils.#normalizeKey(key), value))
    }, {})
  }

  static isWebURL (url) {
    try {
      const parsedURL = new URL(url)

      return Utils.#WEB_URL_PROTOCOLS.includes(parsedURL.protocol)
    } catch {
      return false
    }
  }

  static #normalizeKey (key) {
    return key.replace(Utils.#NORMALIZE_KEY_REGEXP, '$1-$2').replace('_', '-').toLowerCase()
  }

  static #normalizeParam (key, value) {
    switch (true) {
      case key === 'expires' && value instanceof Date:
        return { [key]: Math.floor(value / 1000) }
      case value === undefined || value === null:
        return { [key]: '' }
      default:
        return { [key]: value }
    }
  }
}
