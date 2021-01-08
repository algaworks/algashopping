import { createStore, combineReducers } from 'redux'

import calculatorReducer from './calculator/reducer'
import productsReducer from './products/reducer'

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: productsReducer
})

const store = createStore(rootReducer)

export default store