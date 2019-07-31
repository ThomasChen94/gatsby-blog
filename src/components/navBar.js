
import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import navBarStyles from './navBar.module.scss'



export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
			<>
			  <br />
			  <Navbar className={navBarStyles.navBar} bg="light" variant="light">
			    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
			    <Nav className="mr-auto">
			      <Nav.Link href="/">Home</Nav.Link>
			      <Nav.Link href="/blog">Blog</Nav.Link>
			      <Nav.Link href="/about">About</Nav.Link>
			    </Nav>
			  </Navbar>
			</>);
  }
}