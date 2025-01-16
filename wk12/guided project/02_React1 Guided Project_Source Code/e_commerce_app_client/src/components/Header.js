import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";


function Header( ) {
    const loggedInUser = JSON.parse( sessionStorage.getItem( "loggedInUser" ) );

    function handleSignOut( event ) {
        event.preventDefault();
        sessionStorage.removeItem( "loggedInUser" );
        window.location.reload();
    }

    return(
        <header>
            <Navbar
                bg = "primary"
                navbar = "light"
                variant = "dark"
                expand = "lg"
                collapseOnSelect
            >
                <Container>
                    <Nav.Link>
                        <Navbar.Brand>ECart</Navbar.Brand>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                    <Navbar.Collapse id = "basic-navbar-nav">
                        <Nav className = "mr-auto">
                            { loggedInUser && !loggedInUser.isAdmin && (
                                <>
                                    <Nav.Link>
                                        <span className = "bi bi-cart" >
                                            Cart
                                        </span>
                                    </Nav.Link>
                                    <Nav.Link>
                                    <span className = "bi bi-bag-check-fill" >
                                        Orders
                                    </span>
                                    </Nav.Link>
                                </>
                            ) }
                            { loggedInUser && (
                                <>
                                    <Nav.Link>
                                        <span className = "bi bi-person-badge">
                                            Profile
                                        </span>
                                    </Nav.Link>
                                </>
                            ) }
                            { loggedInUser && loggedInUser.isAdmin && (
                                <>
                                    <NavDropdown title = "Admin" id = "adminMenu">
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                        <NavDropdown.Item>Categories</NavDropdown.Item>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) }
                            { loggedInUser && (
                                <>
                                    <Nav.Link 
                                        onClick={ ( event ) => handleSignOut( event ) }
                                    >
                                        <span className = "bi bi-box-arrow-in-right">
                                            Sign Out
                                        </span>
                                    </Nav.Link>
                                </>
                            ) }
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
    );
}


export default Header;