export function toggleProduct (id: string) {
    return {
        type: 'TOGGLE_PRODUCT',
        payload: id
    }
}