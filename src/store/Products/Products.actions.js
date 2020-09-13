export function toggleProduct (id) {
  return {
    type: 'TOGGLE_PRODUCT',
    payload: id
  }
}