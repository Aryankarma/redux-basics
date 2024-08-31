import { configureStore } from "@reduxjs/toolkit";
// import reducers and add them into confugureStore object
import todoReducer from './features/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})