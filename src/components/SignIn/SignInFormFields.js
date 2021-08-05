import { Field, ErrorMessage } from "formik"
import Col from "react-bootstrap/Col"
import FormFieldText from "../FormFieldText"
import FormFieldPassword from "../FormFieldPassword"
import FormErrorMessage from "../FormErrorMessage"

const SignInFormFields = ({ touched, errors }) => {
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
        name="password"
        label="Password"
        touched={touched.password}
        errors={errors.password}
        component={FormFieldPassword}
      />
      <ErrorMessage name="password" component={FormErrorMessage} />
    </Col>
  )
}

export default SignInFormFields
