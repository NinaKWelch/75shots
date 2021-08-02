import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const HeaderNavSignIn = () => (
  <>
    <Navbar.Text className="px-2 d-none d-md-block">
      Not a member? <Link to="/signup">Sign Up</Link>{" "}
    </Navbar.Text>
    <Button
      as={Link}
      to="/signin"
      variant="outline-success"
      className="d-none d-md-block"
    >
      Sign In
    </Button>
    <Row className="pt-2 d-md-none">
      <Col xs={6}>
        <Button as={Link} to="/signup" variant="outline-secondary" className="w-100">
          Sign Up
        </Button>
      </Col>
      <Col xs={6}>
        <Button as={Link} to="/signin" variant="outline-success" className="w-100">
          Sign In
        </Button>
      </Col>
    </Row>
  </>
)

export default HeaderNavSignIn
