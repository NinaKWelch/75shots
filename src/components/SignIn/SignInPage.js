import { Link } from "react-router-dom"
import SignInForm from "./SignInForm"

const SignInPage = ({ handleConfirm }) => {
  return (
    <>
      <div className="pt-4 text-center">
        <h3>Sign In</h3>
        <p>
          New to 75 Shots? <Link to="./signup">Sign Up</Link>
        </p>
      </div>
      <SignInForm handleConfirm={handleConfirm} />
    </>
  )
}

export default SignInPage
