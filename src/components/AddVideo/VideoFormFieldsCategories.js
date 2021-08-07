import { Field } from "formik"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FormFieldCheckbox from "../FormFieldCheckbox"

const VideoFormFieldsCategories = ({ label, values }) => {
  return (
    <Form.Group className="mb-1 pt-3">
      <Form.Label>{label}:</Form.Label>
      <Row>
        {values.categories.map((category, index) => (
          <Col key={index} xs={12} sm={4} md={3}>
            <Field
              name={`categories.${index}.value`}
              value={category.value}
              id={category.label}
              label={category.label}
              component={FormFieldCheckbox}
            />
          </Col>
        ))}
      </Row>
    </Form.Group>
  )
}

export default VideoFormFieldsCategories
