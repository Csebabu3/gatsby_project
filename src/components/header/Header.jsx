// import { Link } from "gatsby"
// import React from "react"
// import "./header.css"

// function Header() {
//   return (
//     <div className="header">
//       <div className="logo">
//         <h1>Nature.com</h1>
//       </div>
//       <nav>
//         <ul className="nav-links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/categories">Categories</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Header
import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"
import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/" className="title">
          Nature-Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-link">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
