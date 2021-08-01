import React from "react"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import HeaderNav from "./HeaderNav"
import SignOutButton from "./SignOutButton"
import SignInButton from "./SignInButton"

const Header = ({ user }) => {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className="bg-white p-3">
      <Navbar.Brand as={Link} to="/">
        75SHOTS
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="header-nav" />

      <Navbar.Collapse id="header-nav">
        <HeaderNav />
        {user && (
          <>
            <Navbar.Text className="px-2">
              {user.username}
            </Navbar.Text>
            <SignOutButton />
          </>
        )}
        {!user && (
          <>
            <Navbar.Text className="px-2">
              Not a member? <Link to="/signup">Sign Up</Link>{" "}
            </Navbar.Text>
            <SignInButton />
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
