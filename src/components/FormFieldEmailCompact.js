import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"

const FormFieldEmailCompact = ({ field, label, touched, errors }) => {
  return (
    <Form.Group>
      <FloatingLabel label="Email address">
        <Form.Control
          type="email"
          {...field}
          placeholder="name@example.com"
          isInvalid={touched && errors}
        />
      </FloatingLabel>
    </Form.Group>
  )
}

export default FormFieldEmailCompact
