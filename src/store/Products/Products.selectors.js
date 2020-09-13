export const selectAllProducts = state => state.products 

export const selectSelectedProducts =
  state => state.products.filter(product => product.checked)

export const selectSelectedProductTotalPrice =
  state => state.products
    .filter(product => product.checked)
    .reduce((a, b) => a + b.price, 0)