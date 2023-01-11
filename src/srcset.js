import Url from './url'
import Range from './range'
import Sequence from './sequence'
import Utils from './srcset/utils'

export default class Srcset {
  static #DEFAULT_DPRS = [1, 2, 3, 4, 5, 6]
  static #DEFAULT_WIDTHS = Sequence.sequence(100, 8192)

  static srcset(source, path, params = {}) {
    params = Utils.normalizeParams(params)

    switch(true) {
      case Srcset.#isFluid(params.width):
        if (Srcset.#isFluid(params.dpr)) {
          throw new Error('dpr as Array or Range is not allowed when width is also an Array or Range')
        }

        return Srcset.#srcset_width(source, path, params)
      case !!(params.width || params.height):
        if (Srcset.#isFluid(params.height)) {
          throw new Error('height as Array or Range is only allowed when width is also an Array or Range')
        }

        return Srcset.#srcset_dpr(source, path, {...params, ...{dpr: Srcset.#dprs(params)}})
      default:
        if (Srcset.#isFluid(params.dpr)) {
          throw new Error('dpr as Array or Range is not allowed without specifying width or height')
        }

        return Srcset.#srcset_width(source, path, {...params, ...{width: Srcset.#DEFAULT_WIDTHS}})
    }
  }

  static #dprs(params) {
    if (Srcset.#isFluid(params.dpr)) {
      return params.dpr
    } else {
      return Srcset.#DEFAULT_DPRS
    }
  }

  static #isFluid(value) {
    return Array.isArray(value) || value instanceof Range
  }

  static #srcset_dpr(source, path, params) {
    return Utils.splitParamsDpr(params).map(
      (splitParams) => `${Url.url(source, path, splitParams)} ${splitParams.dpr}x`
    ).join(',\n')
  }

  static #srcset_width(source, path, params) {
    return Utils.splitParamsWidth(params).map(
      (splitParams) => `${Url.url(source, path, splitParams)} ${splitParams.width}w`
    ).join(',\n')
  }
}
