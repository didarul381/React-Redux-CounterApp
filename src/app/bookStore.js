import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../featuress/books/BookSlice";

const bookStore=configureStore({
    reducer:{
          booksReducer:bookSlice
    }
})

export default bookStore;