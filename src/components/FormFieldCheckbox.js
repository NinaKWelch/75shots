import Form from "react-bootstrap/Form"

const FormFieldCheckbox = ({ field, id, label }) => (
  <Form.Check className="mb-2">
    <Form.Check.Input
      type="checkbox"
      id={id}
      {...field}
      checked={field.value === true}
      className="pr-2"
    />
    <Form.Check.Label htmlFor={id}>{label}</Form.Check.Label>
  </Form.Check>
)

export default FormFieldCheckbox
