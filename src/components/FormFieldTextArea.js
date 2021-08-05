import Form from "react-bootstrap/Form"

const FormFieldTextArea = ({ field, label, touched, errors, rows }) => (
  <Form.Group className="mb-1 pt-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      as="textarea"
      rows={rows}
      size="lg"
      {...field}
      isInvalid={touched && errors}
    />
  </Form.Group>
)

export default FormFieldTextArea
