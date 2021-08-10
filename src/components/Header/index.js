import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import HeaderNav from "./HeaderNav"
import HeaderNavUser from "./HeaderNavUser"
import HeaderNavSignIn from "./HeaderNavSignIn"
import DonateButton from "./DonateButton"

const Header = ({ user }) => {
  return (
    <Container as="header" fluid="xl">
      <Navbar collapseOnSelect expand="md" fixed="top" className="bg-white p-3">
        <Navbar.Brand as={Link} to="/">
          75SHOTS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-nav" />

        <Navbar.Collapse id="header-nav">
          <HeaderNav />
          <DonateButton />
          {user ? <HeaderNavUser user={user} /> : <HeaderNavSignIn />}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default Header
