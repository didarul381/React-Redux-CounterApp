import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletBook } from './BookSlice';

const BooksView = () => {
    const books=useSelector((state)=>state.booksReducer.books);
    console.log(books)
    const dispatch=useDispatch()
    const handleDelete =(id)=>{
        dispatch(deletBook(id))

    }
    return (
        <div>
           <h2>Lists of Books..</h2> 
           <table>
            <thead>
                <tr >
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {books&& books.map((book)=>{
                    const{id,title,autohr}=book;
                    return <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{autohr}</td>
                        <td>
                            <button>EDIT</button>
                            <button onClick={()=>handleDelete(id)}>DELETE</button>
                        </td>
                    </tr>
                })}
            </tbody>
           </table>
        </div>
    );
};

export default BooksView;