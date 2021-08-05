import React from "react"
import { Auth } from "aws-amplify"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import SignInFormFields from "./SignInFormFields"

// Yup
const signInSchema = Yup.object().shape({
  username: Yup.string().max(35, "Username is too long").required("Username is required"),
  password: Yup.string().required("Password is required"),
})

const SignInForm = () => {
  const signIn = async (credentials) => {
    try {
      await Auth.signIn(credentials)
    } catch (err) {
      console.log("error signing in:", err.message)
    }
  }

  return (
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
            <SignInFormFields touched={touched} errors={errors} />
            <Col
              xs={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              className="pt-3"
            >
              <Button type="submit" variant="success" size="lg" className="w-100">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
}

export default SignInForm
