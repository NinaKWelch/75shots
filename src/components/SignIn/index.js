import React from "react"
import { Auth } from "aws-amplify"
import { Link } from "react-router-dom"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import SignInForm from "./SignInForm"

// Yup
const signInSchema = Yup.object().shape({
  username: Yup.string().max(35, "Username is too long").required("Username is required"),
  password: Yup.string().required("Password is required"),
})

const SignIn = () => {
  const signIn = async (credentials) => {
    try {
      await Auth.signIn(credentials)
    } catch (err) {
      console.log("error signing in:", err.message)
    }
  }

  return (
    <>
      <Container className="mt-72">
        <div className="pt-4 text-center">
          <h3>Sign In</h3>
          <p>
            New to 75 Shots? <Link to="./signup">Sign Up</Link>
          </p>
        </div>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            const userCredentials = {
              username: values.username,
              password: values.password,
            }

            signIn(userCredentials)
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <Row>
                <SignInForm touched={touched} errors={errors} />
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}

export default SignIn
