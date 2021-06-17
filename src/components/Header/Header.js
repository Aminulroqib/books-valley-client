import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand to="/home">Books Valley</Navbar.Brand>
                <Nav className="mr-auto nav-link">
                   <div >
                   <Link className="mr-2" to="/home">Home</Link>
                    <Link className="mr-2"  to="/orders">Orders</Link>
                    <Link className="mr-2" to="/admin">Admin</Link>
                    <Link className="mr-2" to="/deals">Deals</Link>
                   </div>
                </Nav>
                <Form>
                        <Button variant="outline-info">Log In</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;