import { Field, ErrorMessage } from "formik"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import FormFieldText from "../FormFieldText"
import FormFieldPassword from "../FormFieldPassword"
import FormErrorMessage from "../FormErrorMessage"

const SignInForm = ({ touched, errors }) => {
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
      <div className="pt-3">
        <Button type="submit" variant="success" size="lg" className="w-100">
          Login
        </Button>
      </div>
    </Col>
  )
}

export default SignInForm
