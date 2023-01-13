import Range from '../range'
import Sequence from '../sequence'

export default class Utils {
  static #NORMALIZE_KEYS = ['dpr', 'width']

  static #SPLIT_DPR_KEYS = ['dpr', 'quality']
  static #SPLIT_WIDTH_KEYS = ['width', 'height', 'quality']

  static normalizeParams (params) {
    return Object.entries(params).reduce((normalizedParams, [key, value]) => {
      return Object.assign(normalizedParams, Utils.#normalizeParam(key, value))
    }, {})
  }

  static splitParamsDpr (params) {
    return Utils.#splitValues(params, Utils.#SPLIT_DPR_KEYS, params.dpr.length).map(
      ([dpr, quality]) => Utils.#mergeParams(params, { dpr, quality })
    )
  }

  static splitParamsWidth (params) {
    return Utils.#splitValues(params, Utils.#SPLIT_WIDTH_KEYS, Utils.#splitSize(params.width)).map(
      ([width, height, quality]) => Utils.#mergeParams(params, { width, height, quality })
    )
  }

  static #normalizeParam (key, value) {
    switch (true) {
      case Utils.#NORMALIZE_KEYS.includes(key) && Array.isArray(value) && value.length === 0:
        return {}
      default:
        return { [key]: value }
    }
  }

  static #splitSize (value) {
    switch (true) {
      case value instanceof Range:
        return Sequence.DEFAULT_SIZE
      default:
        return value.length
    }
  }

  static #splitValues (params, keys, size) {
    return Utils.#zip(keys.map((key) => Utils.#splitValue(key, params[key], size)))
  }

  static #splitValue (key, value, size) {
    switch (true) {
      case key === 'dpr' && value instanceof Range:
        return value.toArray()
      case value instanceof Range:
        return Sequence.sequence(value.first, value.last, size)
      case Array.isArray(value):
        return value
      default:
        return Array(size).fill(value)
    }
  }

  static #zip (arrays) {
    const length = Math.max(...arrays.map(array => array.length))

    return Array.from({ length }, (_, i) => arrays.map(array => array[i]))
  }

  static #mergeParams (params, mergeParams) {
    return {
      ...params,
      ...Object.fromEntries(
        Object.entries(mergeParams).filter(([key, _]) => key in params)
      )
    }
  }
}
