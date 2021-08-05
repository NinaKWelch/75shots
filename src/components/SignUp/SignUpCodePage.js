import SignUpCodeForm from "./SignUpCodeForm"

const SignUpCodePage = ({ handleConfirm }) => {
  return (
    <>
      <div className="pt-4 text-center">
        <h3>Sign Up</h3>
        <p>Please check your email for the confirmation code.</p>
      </div>
      <SignUpCodeForm handleConfirm={handleConfirm} />
    </>
  )
}

export default SignUpCodePage
