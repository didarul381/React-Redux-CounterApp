import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosaction';

const Todos = () => {
    const {isLoading,todos,error}=useSelector((state)=>state);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllTodos);

    },[])
    return (
        <div>
           <h2>Todos App.......</h2> 
           <hr></hr>
           {isLoading && <h3>Loading.....</h3>}
           {error && <h3>{error.message}</h3>}
           <section>
            {todos &&  todos.map((todo)=>{
                return  <article key={todo.id}>
                    <p>{todo.title}</p>
                </article>
            })}
           </section>

        </div>
    );
};

export default Todos;