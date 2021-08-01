import { Auth } from "aws-amplify"
import Button from "react-bootstrap/Button"

const SignOutButton = () => {
  const signOut = async () => {
    try {
        await Auth.signOut()
    } catch(err) {
        console.log('error signing out: ', err.message)
    }
  }

  return (
    <>
      <Button variant="outline-warning" className="d-none d-md-block" onClick={signOut}>
        Sign Out
      </Button>
      <Button variant="outline-warning" className="w-100 d-md-none" onClick={signOut}>
        Sign Out
      </Button>
    </>
  )
}

export default SignOutButton
