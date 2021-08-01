import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

const SignInButton = () => {
  return (
    <>
      <Button
        as={Link}
        to="/signin"
        variant="outline-success"
        className="d-none d-md-block"
      >
        Sign In
      </Button>
      <Button
        as={Link}
        to="/signin"
        variant="outline-success"
        className="w-100 d-md-none"
      >
        Sign In
      </Button>
    </>
  )
}

export default SignInButton
