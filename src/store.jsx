import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todoSlice'
import postReducer from './features/postSlice'
export const store = configureStore({
  reducer: {
    todolist: todoReducer,
    posts:postReducer
  },
})