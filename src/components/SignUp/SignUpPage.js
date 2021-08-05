import { Link } from "react-router-dom"
import SignUpForm from "./SignUpForm"

const SignUpPage = ({ handleConfirm }) => {
  return (
    <>
      <div className="pt-4 text-center">
        <h3>Sign Up</h3>
        <p>
          Already a member? <Link to="./signin">Sign In</Link>
        </p>
      </div>
      <SignUpForm handleConfirm={handleConfirm} />
    </>
  )
}

export default SignUpPage
