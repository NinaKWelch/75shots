import { Link } from "react-router-dom"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Auth } from "aws-amplify"
import Row from "react-bootstrap/Row"
import SignUpForm from "./SignUpForm"

// Yup
const signUpSchema = Yup.object().shape({
  username: Yup.string().max(35, "Username is too long").required("Username is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string()
    .email("Must be a valid email address")
    .required("Contact email is required"),
})

const SignUpPage = ({ handleConfirm }) => {
  const signUp = async (user) => {
    try {
      await Auth.signUp(user)
    } catch (err) {
      console.log("error signing up:", err.message)
    }
  }

  return (
    <>
      <div className="pt-4 text-center">
        <h3>Sign Up</h3>
        <p>
          Already a member? <Link to="./signin">Sign In</Link>
        </p>
      </div>
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
              <SignUpForm touched={touched} errors={errors} />
            </Row>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SignUpPage
