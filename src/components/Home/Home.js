import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Books from '../Books/Books';

const Home = () => {
    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5055/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    
    return (
        <div className="row">
            {
                books.map(book =><Books book={book}></Books>)
            }
            
        </div>
    );
};

export default Home;