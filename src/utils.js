export default class Utils {
  static #NORMALIZE_PATH_PREFIX_REGEXP = new RegExp(/^\/*/)
  static #NORMALIZE_PATH_SUFFIX_REGEXP = new RegExp(/\/*$/)
  static #NORMALIZE_KEY_REGEXP = new RegExp(/([a-z])([A-Z])/g)

  static normalizePath(path) {
    return path.replace(Utils.#NORMALIZE_PATH_PREFIX_REGEXP, '').replace(Utils.#NORMALIZE_PATH_SUFFIX_REGEXP, '')
  }

  static normalizeParams(params) {
    return Object.keys(params).reduce((result, key) => {
      result[Utils.#normalizeKey(key)] = params[key]
      return result
    }, {})
  }

  static #normalizeKey(key) {
    return key.replace(Utils.#NORMALIZE_KEY_REGEXP, '$1-$2').replace('_', '-').toLowerCase()
  }
}
