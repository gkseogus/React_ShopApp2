import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand onClick={() => { navigate('/') }}>HRS(hanReactShop)</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
                <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
};

export default React.memo(NavBar);