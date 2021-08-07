import Form from "react-bootstrap/Form"

const FormFieldSelect = ({ field, label, items, setFieldValue }) => {
  return (
    <Form.Group className="mb-1 pt-3">
      <Form.Label>{label}</Form.Label>
      <Form.Select size="lg" onChange={(e) => setFieldValue(field.name, e.target.value)}>
        {items.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}

export default FormFieldSelect
