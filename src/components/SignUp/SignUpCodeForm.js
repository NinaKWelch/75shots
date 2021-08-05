import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Auth } from "aws-amplify"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import SignUpCodeFormFields from "./SignUpCodeFormFields"

// Yup
const signUpCodeSchema = Yup.object().shape({
  username: Yup.string().max(35, "Username is too long").required("Username is required"),
  code: Yup.string().max(6, "Code is too long").required("Code is required"),
})

const SignUpCodeForm = ({ handleConfirm }) => {
  const confirmSignUp = async (username, code) => {
    try {
      await Auth.confirmSignUp(username, code)
    } catch (err) {
      console.log("error confirming sign up:", err.message)
    }
  }

  return (
    <>
      <Container className="mt-72">
        <div className="pt-4 text-center">
          <h3>Sign Up</h3>
          <p>Please check your email for the confirmation code.</p>
        </div>
        <Formik
          initialValues={{
            username: "",
            code: "",
          }}
          validationSchema={signUpCodeSchema}
          onSubmit={(values) => {
            confirmSignUp(values.username, values.code)
            handleConfirm()
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <Row>
                <SignUpCodeFormFields touched={touched} errors={errors} />
                <Col
                  xs={12}
                  md={{ span: 8, offset: 2 }}
                  lg={{ span: 6, offset: 3 }}
                  className="pt-3"
                >
                  <Button type="submit" variant="success" size="lg" className="w-100">
                    Confirm Sign Up
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}

export default SignUpCodeForm
