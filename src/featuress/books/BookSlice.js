//slice means collection of logics

import { createSlice } from "@reduxjs/toolkit";



  const intialBooks={
    books:[
        {id:1,title:"Love Bangladesh",autohr:"sakib"},
        {id:2,title:"Love Bangladeshi People",autohr:"sakib"},
    ],
};

export const bookSlice=createSlice({
    name:"books",
    initialState:intialBooks,
    reducers:{
        showBooks:(state)=>state,
        addBook:(state,action)=>{
            state.books.push(action.payload);
        },
        deletBook:(state,action)=>{
            const id=action.payload
            state.books= state.books.filter(book=>book.id!==id)

        }

    },
});

export const{showBooks,addBook,deletBook}=bookSlice.actions;
export default bookSlice.reducer;
