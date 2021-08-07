import { Field, FieldArray, ErrorMessage } from "formik"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import FormFieldText from "../FormFieldText"
import FormErrorMessage from "../FormErrorMessage"

const VideoFormFieldsCrew = ({ label, values }) => {
  return (
    <Form.Group className="mb-1 pt-3">
      <Form.Label>{label}:</Form.Label>
      <FieldArray
        name="crew"
        render={(arrayHelpers) => (
          <>
            {values.crew.map((crew, index) => (
              <Row key={index} className="mx-2">
                <Col xs={12} sm={6}>
                  <Field
                    name={`crew[${index}].position`}
                    label="Position"
                    component={FormFieldText}
                  />
                  <ErrorMessage
                    name={`crew[${index}].position`}
                    component={FormErrorMessage}
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <Field
                    name={`crew[${index}].name`}
                    label="Name"
                    component={FormFieldText}
                  />
                  <ErrorMessage
                    name={`crew[${index}].name`}
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
                  onClick={() => arrayHelpers.push({ position: "", name: "" })}
                >
                  Add New
                </Button>
              </Col>
              {values.crew.length > 1 && (
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

export default VideoFormFieldsCrew
