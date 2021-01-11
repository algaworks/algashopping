import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // 

// Private
import calculatorReducer from './calculator/reducer'
import productsReducer from './products/reducer'

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: productsReducer
})

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)