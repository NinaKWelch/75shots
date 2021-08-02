import { Auth } from "aws-amplify"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"

const HeaderNavUser = ({ user }) => {
  const signOut = async () => {
    try {
      await Auth.signOut()
    } catch (err) {
      console.log("error signing out: ", err.message)
    }
  }

  return (
    <>
      <Navbar.Text className="px-2 d-none d-md-block">{user.username}</Navbar.Text>

      <Button variant="outline-secondary" className="d-none d-md-block" onClick={signOut}>
        Sign Out
      </Button>
      <div className="pt-2 d-md-none">
        <Button variant="outline-secondary" className="w-100 d-md-none" onClick={signOut}>
          Sign Out
        </Button>
      </div>
    </>
  )
}

export default HeaderNavUser
