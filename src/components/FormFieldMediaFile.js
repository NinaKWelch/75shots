import Form from "react-bootstrap/Form"

const FormFieldMediaFile = ({ name, label, touched, errors, setFieldValue }) => (
  <Form.Group className="mb-1 pt-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type="file"
      size="lg"
      isInvalid={touched && errors}
      onChange={(e) => {
        setFieldValue(name, e.currentTarget.files[0])
      }}
    />
  </Form.Group>
)

export default FormFieldMediaFile
