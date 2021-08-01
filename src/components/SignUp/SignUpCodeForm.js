import { Field, ErrorMessage } from "formik"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import FormFieldText from "../FormFieldText"
import FormErrorMessage from "../FormErrorMessage"

const SignUpCodeForm = ({ touched, errors }) => {
  return (
    <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
      <Field
        name="username"
        label="Username"
        touched={touched.username}
        errors={errors.username}
        component={FormFieldText}
      />
      <ErrorMessage name="username" component={FormErrorMessage} />
      <Field
        name="authCode"
        label="Confirmation Code"
        touched={touched.authCode}
        errors={errors.authCode}
        component={FormFieldText}
      />
      <ErrorMessage name="name" component={FormErrorMessage} />
      <div className="pt-3">
        <Button type="submit" variant="success" size="lg" className="w-100">
          Confirm Sign Up
        </Button>
      </div>
    </Col>
  )
}

export default SignUpCodeForm
