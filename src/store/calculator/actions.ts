export function sum (a: number, b: number) {
    return {
        type: 'SUM',
        payload: [a, b]
    }
}

export function subtract (a: number, b: number) {
    return {
        type: 'SUBTRACT',
        payload: [a, b] 
    }
}