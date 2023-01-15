import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBok from '../featuress/books/AddBok';
import BooksView from '../featuress/books/BooksView';
import Navbr from '../layouts/Navbr';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
    return <BrowserRouter>
    <Navbr></Navbr>
   <Routes>
   <Route 
     path='/' element={<Home></Home>}
     
   ></Route>
   <Route path='/show-books' element={<BooksView></BooksView>}></Route>
   <Route path='/add-book' element={<AddBok></AddBok>}></Route>
   <Route path='*' element={<Error></Error>}></Route>
   </Routes>
    </BrowserRouter>
};

export default Index;