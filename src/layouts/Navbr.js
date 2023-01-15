import React from 'react';
import { Link } from 'react-router-dom';

const Navbr = () => {
    return (
        <div>
            <nav>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/show-books" className='nav-link'>Shoe Books</Link>
                <Link to="/add-book" className='nav-link'>Add book</Link>
            </nav>
        </div>
    );
};

export default Navbr;