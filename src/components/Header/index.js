import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import HeaderNav from "./HeaderNav"
import HeaderNavUser from "./HeaderNavUser"
import HeaderNavSignIn from "./HeaderNavSignIn"

const Header = ({ user }) => {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className="bg-white p-3">
      <Navbar.Brand as={Link} to="/">
        75SHOTS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="header-nav" />
      <Navbar.Collapse id="header-nav">
        <HeaderNav />
        {user ? <HeaderNavUser user={user} /> : <HeaderNavSignIn />}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
