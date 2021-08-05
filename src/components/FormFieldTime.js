import Form from "react-bootstrap/Form"

const FormFieldTime = ({ field, label, touched, errors }) => {
  return (
    <Form.Group className="mb-1 pt-3">
      <Form.Label>{label} (min) </Form.Label>
      <Form.Control type="text" size="lg" {...field} isInvalid={touched && errors} />
    </Form.Group>
  )
}

export default FormFieldTime
