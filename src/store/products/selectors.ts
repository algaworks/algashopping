interface SelectedProps {
    checked: boolean;
}

export const selectAllProducts = (state: any) => state.products

export const selectSelectedProducts = (state: any) => state.products.filter((product: SelectedProps) => product.checked)

export const selectSelectedProductTotalPrice = (state: any) => state.products.filter((product: SelectedProps) => product.checked).reduce((a: number, b: any) => a + b.price, 0);
