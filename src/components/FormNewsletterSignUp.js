import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
//import { Auth } from "aws-amplify"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { ArrowRight } from "react-bootstrap-icons"
import FormFieldEmailCompact from "./FormFieldEmailCompact"
import FormErrorMessage from "./FormErrorMessage"

// Yup
const newsletterSignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email address")
    .required("Contact email is required"),
})

const FormNewsletterSignUp = () => {
  const newsletterSignUp = async (user) => {
    /*try {
      await Auth.signUp(user)
    } catch (err) {
      console.log("error signing up:", err.message)
    }
    */
  }

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={newsletterSignUpSchema}
      onSubmit={(values) => {
        const newSubscriber = {
          attributes: { email: values.email },
        }
        newsletterSignUp(newSubscriber)
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <Row>
            <Col xs={9} md={6} lg={4}>
              <Field
                name="email"
                placeholder="Email"
                touched={touched.email}
                errors={errors.email}
                component={FormFieldEmailCompact}
              />
              <ErrorMessage name="email" component={FormErrorMessage} />
            </Col>
            <Col xs={3}>
              <Button type="submit" variant="light" className="p-3">
                <ArrowRight />
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
}

export default FormNewsletterSignUp
