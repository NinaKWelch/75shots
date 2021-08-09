import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

const HeaderNavDonate = () => {
  return (
    <Nav className="px-1 bg-warning">
      <NavDropdown title="Donate">
        <NavDropdown.Item href="#action/3.1">Give Once</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Give Monthly</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Become A Partner</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Other Ways To Give</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}

export default HeaderNavDonate
