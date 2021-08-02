import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import SignUpPage from "./SignUpPage"
import SignUpCodePage from "./SignUpCodePage"

const SignUp = () => {
  const [confirm, setConfirm] = useState(false)

  return (
    <Container className="mt-72">
      {confirm === false && <SignUpPage handleConfirm={() => setConfirm(true)} />}
      {confirm === true && <SignUpCodePage handleConfirm={() => setConfirm(false)} />}
    </Container>
  )
}

export default SignUp
