//state
//action
//reducer
//store


import axios from "axios";
import { GET_TODOS_FAILD, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constant";


 export const getAllTodos = async(dispatch) =>{

    dispatch({
        type:GET_TODOS_REQUEST
    })
   try {
    
    const res= await axios.get("https://jsonplaceholder.typicode.com/todos");

    dispatch({
        type:GET_TODOS_SUCCESS,
        payload:res.data
    })
   } catch (error) {
        
    dispatch({
        type:GET_TODOS_FAILD,
        payload:error.message
    })
   }
};