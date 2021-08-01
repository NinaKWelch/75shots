import Form from "react-bootstrap/Form"

const FormFieldEmail = ({ field, label, touched, errors }) => (
  <Form.Group className="mb-1 pt-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control type="email" size="lg" {...field} isInvalid={touched && errors} />
  </Form.Group>
)

export default FormFieldEmail
