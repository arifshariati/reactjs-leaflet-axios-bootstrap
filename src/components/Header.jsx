import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

function Header(){
    return(
        <div className="App-header">
            <Navbar expand="lg">
            <Navbar.Brand href="#home">React-Leaflet-Axios-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header;