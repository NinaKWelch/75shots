import Form from "react-bootstrap/Form"

const FormFieldImageFile = ({ name, label, touched, errors, setFieldValue }) => (
  <Form.Group className="mb-1 pt-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type="file"
      size="lg"
      accept=".png, .jpg, .jpeg"
      isInvalid={touched && errors}
      onChange={(e) => setFieldValue(name, e.currentTarget.files[0])}
    />
    <Form.Text className="text-muted">Must be in JPEG or PNG format.</Form.Text>
  </Form.Group>
)

export default FormFieldImageFile

//setFieldValue(name, e.target.files[0]) console.log(e.currentTarget.files[0])
