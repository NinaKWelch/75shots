import Form from "react-bootstrap/Form"

const FormFieldPassword = ({ field, label, touched, errors }) => (
  <Form.Group className="mb-1 pt-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control type="password" size="lg" {...field} isInvalid={touched && errors} />
  </Form.Group>
)

export default FormFieldPassword
