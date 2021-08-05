import { Field, ErrorMessage } from "formik"
import Col from "react-bootstrap/Col"
import FormFieldText from "../FormFieldText"
import FormErrorMessage from "../FormErrorMessage"

const SignUpCodeFormFields = ({ touched, errors }) => {
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
        name="code"
        label="Confirmation Code"
        touched={touched.code}
        errors={errors.code}
        component={FormFieldText}
      />
      <ErrorMessage name="code" component={FormErrorMessage} />
    </Col>
  )
}

export default SignUpCodeFormFields
