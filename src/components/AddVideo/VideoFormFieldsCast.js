import { Field, FieldArray, ErrorMessage } from "formik"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import FormFieldText from "../FormFieldText"
import FormErrorMessage from "../FormErrorMessage"

const VideoFormFieldsCast = ({ label, values }) => {
  return (
    <Form.Group className="mb-1 pt-3">
      <Form.Label>{label}:</Form.Label>
      <FieldArray
        name="cast"
        render={(arrayHelpers) => (
          <>
            {values.cast.map((cast, index) => (
              <Row key={index} className="mx-2">
                <Col xs={12} sm={6}>
                  <Field
                    name={`cast[${index}].role`}
                    label="Role"
                    component={FormFieldText}
                  />
                  <ErrorMessage
                    name={`cast[${index}].role`}
                    component={FormErrorMessage}
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <Field
                    name={`cast[${index}].name`}
                    label="Name"
                    component={FormFieldText}
                  />
                  <ErrorMessage
                    name={`cast[${index}].name`}
                    component={FormErrorMessage}
                  />
                </Col>
              </Row>
            ))}
            <Row className="mx-2">
              <Col xs={6} className="mb-1 pt-3">
                <Button
                  variant="outline-success"
                  size="lg"
                  className="w-100"
                  onClick={() => arrayHelpers.push({ role: "", name: "" })}
                >
                  Add New
                </Button>
              </Col>
              {values.cast.length > 1 && (
                <Col xs={6} className="mb-1 pt-3">
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    className="w-100"
                    onClick={() => arrayHelpers.pop()}
                  >
                    Remove Last
                  </Button>
                </Col>
              )}
            </Row>
          </>
        )}
      />
    </Form.Group>
  )
}

export default VideoFormFieldsCast
