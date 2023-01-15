import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../featuress/books/BookSlice";

const store=configureStore({
    reducer:{
          booksReducer:booksReducer
    }
})

export default store;