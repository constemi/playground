import { configureStore } from '@reduxjs/toolkit'

import todosReducer from "../features/todos/todosSlice"
import productsReducer from '../features/products/productsSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    products: productsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store;
