import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Auth } from "aws-amplify"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import SignUpCodeForm from "./SignUpCodeForm"

// Yup
const signUpCodeSchema = Yup.object().shape({
  username: Yup.string().max(35, "Username is too long").required("Username is required"),
  code: Yup.string().max(6, "Code is too long").required("Code is required"),
})

const SignUpCodePage = ({ handleConfirm }) => {
  const confirmSignUp = async credentials => {
    try {
      await Auth.confirmSignUp(credentials)
    } catch(err) {
      console.log('error confirming sign up:', err.message)
    }
  }

  return (
    <>
      <Container className="mt-72">
        <div className="pt-4 text-center">
          <h3>Sign Up</h3>
          <p>
            Please check your email for the confirmation code.
          </p>
        </div>
        <Formik
          initialValues={{
            username: "",
            code: "",
          }}
          validationSchema={signUpCodeSchema}
          onSubmit={(values) => {
            const userCredentials = {
              username: values.username,
              code: values.code
            }

            confirmSignUp(userCredentials)
            handleConfirm()
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <Row>
                <SignUpCodeForm touched={touched} errors={errors} />
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}

export default SignUpCodePage
