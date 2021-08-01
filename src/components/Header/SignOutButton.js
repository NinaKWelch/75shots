import { Auth } from "aws-amplify"
import Button from "react-bootstrap/Button"

const SignOutButton = () => {
  const signOut = () => Auth.signOut()

  return (
    <>
      <Button variant="outline-warning" className="d-none d-md-block" onClick={signOut()}>
        Sign Out
      </Button>
      <Button variant="outline-warning" className="w-100 d-md-none" onClick={signOut()}>
        Sign Out
      </Button>
    </>
  )
}

export default SignOutButton
