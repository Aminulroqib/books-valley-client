import React from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';

const Books = ({ book }) => {
    return (
        <div className="col-md-3">
            {/* <img style={{ height: '300px' }} src={book.imageURL} alt="" />
            <h2>{book.name}</h2> */}

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={book.imageURL} />
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <Button variant="info">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Books;