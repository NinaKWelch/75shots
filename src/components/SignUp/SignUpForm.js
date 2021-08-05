import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Auth } from "aws-amplify"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import SignUpFormFields from "./SignUpFormFields"

// Yup
const signUpSchema = Yup.object().shape({
  username: Yup.string().max(35, "Username is too long").required("Username is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string()
    .email("Must be a valid email address")
    .required("Contact email is required"),
})

const SignUpForm = ({ handleConfirm }) => {
  const signUp = async (user) => {
    try {
      await Auth.signUp(user)
    } catch (err) {
      console.log("error signing up:", err.message)
    }
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        const newUser = {
          username: values.username,
          password: values.password,
          attributes: { email: values.email },
        }
        signUp(newUser)
        handleConfirm()
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <Row>
            <SignUpFormFields touched={touched} errors={errors} />
            <Col
              xs={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              className="pt-3"
            >
              <Button type="submit" variant="success" size="lg" className="w-100">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
