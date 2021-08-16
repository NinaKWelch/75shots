import { Link } from "react-router-dom"
import Nav from "react-bootstrap/Nav"

const HeaderNav = () => (
  <Nav className="me-auto">
    <Nav.Link as={Link} to="/">
      Home
    </Nav.Link>

    <Nav.Link as={Link} to="/about">
      About
    </Nav.Link>

    <Nav.Link as={Link} to="/pocket-cinema">
      Pocket Cinema
    </Nav.Link>

    <Nav.Link as={Link} to="/productions">
      Productions
    </Nav.Link>
  </Nav>
)

export default HeaderNav
