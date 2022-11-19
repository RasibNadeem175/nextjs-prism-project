import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SSRProvider } from 'react-bootstrap';

type Props = {}

const Header = (props: Props) => {
  return (
    <SSRProvider>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Link href="/" passHref legacyBehavior><Navbar.Brand>Media Tracker</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
            <Link href="/books" passHref legacyBehavior><Nav.Link>Books</Nav.Link></Link>
            <Link href="/podcasts" passHref legacyBehavior><Nav.Link>Podcasts</Nav.Link></Link>
            <Link href="/movies" passHref legacyBehavior><Nav.Link>Movies</Nav.Link></Link>
            <Link href="/" passHref legacyBehavior><Nav.Link>TV shows</Nav.Link></Link>
          </Nav>
          <Nav className = "ml-auto">
            <Link href="/userinfo" passHref legacyBehavior><Nav.Link>Profile</Nav.Link></Link>
            <Link href="/signin" passHref legacyBehavior><Nav.Link>Log out</Nav.Link></Link>
            <NavDropdown title="Settings" id="collasible-nav-dropdown">
            <Link href="/Logout" passHref legacyBehavior><NavDropdown.Item>Action</NavDropdown.Item></Link>
            <Link href="#Profile/3.2" passHref legacyBehavior><NavDropdown.Item>
                Another action
              </NavDropdown.Item></Link>
              <Link href="/action/3.3" passHref legacyBehavior><NavDropdown.Item>Something</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/action/3.3" passHref legacyBehavior><NavDropdown.Item>
                Separated link
              </NavDropdown.Item></Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </SSRProvider>
    )
}

export default Header