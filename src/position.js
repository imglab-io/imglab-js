export default class Position {
  static #HORIZONTAL = ['left', 'center', 'right']
  static #VERTICAL = ['top', 'middle', 'bottom']

  static position () {
    if (arguments.length === 1 && Position.#isValidPosition(arguments[0])) {
      return arguments[0]
    }

    if (arguments.length === 2 && Position.#isValidPosition(...arguments)) {
      return [...arguments].join(',')
    }

    throw new Error('Invalid position')
  }

  static #isValidPosition () {
    if (arguments.length === 1 && Position.#isValidDirection(arguments[0])) {
      return true
    }

    if (arguments.length === 2 && Position.#areValidDirections(arguments[0], arguments[1])) {
      return true
    }

    return false
  }

  static #isValidDirection (direction) {
    return Position.#HORIZONTAL.includes(direction) || Position.#VERTICAL.includes(direction)
  }

  static #areValidDirections (directionA, directionB) {
    return (Position.#HORIZONTAL.includes(directionA) && Position.#VERTICAL.includes(directionB)) ||
    (Position.#HORIZONTAL.includes(directionB) && Position.#VERTICAL.includes(directionA))
  }
}
