export function sum (a, b) {
  return {
    type: 'SUM',
    payload: [a, b]
  }
}

export function subract (a, b) {
  return {
    type: 'SUBTACT',
    payload: [a, b]
  }
}

