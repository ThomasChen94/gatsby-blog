
import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import navBarStyles from './navBar.module.scss'



export default class ReactNavbar extends React.Component {
  render() {
    return (
      <nav className={navBarStyles.navBar}>
        <ul className={navBarStyles.navList}>
          <li>
            <Link className={navBarStyles.navItemRight} 
            activeClassName={navBarStyles.activeNavItem} to="contact"> Contact
            </Link>
          </li>
          <li>
            <Link className={navBarStyles.navItemRight} 
                activeClassName={navBarStyles.activeNavItem} to="/blog"> Blogs
            </Link>
          </li>
          <li>
            <Link className={navBarStyles.navItemRight} 
                activeClassName={navBarStyles.activeNavItem} to="/about"> About
            </Link>
          </li>
          <li>
            <Link className={navBarStyles.navItemRight} 
                activeClassName={navBarStyles.activeNavItem} to="/"> Home 
            </Link>
          </li>
        </ul>
      </nav>
    )
  }

  // render() {
  //   return (
		// 	<>
		// 	  <br />
		// 	  <Navbar className={navBarStyles.navBar} bg="light" variant="light">
		// 	    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
		// 	    <Nav className="mr-auto">
		// 	      <Nav.Link className={navBarStyles.navItem} 
  //               activeClassName={navBarStyles.activeNavItem} 
  //               href="/">Home</Nav.Link>
		// 	      <Nav.Link className={navBarStyles.navItem} 
  //               activeClassName={navBarStyles.activeNavItem} 
  //               href="/blog">Blog</Nav.Link>
		// 	      <Nav.Link className={navBarStyles.navItem} 
  //               activeClassName={navBarStyles.activeNavItem} 
  //               href="/about">About</Nav.Link>
		// 	    </Nav>
		// 	  </Navbar>
		// 	</>);
  // }
}
